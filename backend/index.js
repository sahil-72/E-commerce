const express = require('express');
const app = express();
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const { type } = require('os');
const { read } = require('fs');
const { error } = require('console');

app.use(express.json());
app.use(cors());


//DATABASE CONNECTION
mongoose.connect('mongodb+srv://ecommerce:ecommerce@cluster0.kaehlxe.mongodb.net/e-commerce');


// PRODUCT SCHEMA
const Product = mongoose.model('products', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    new_price: {
        type: Number,
        required: true,
    },
    old_price: {
        type: Number,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
})


// USER SCHEMA
const Users = mongoose.model('Users', {
    username: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
    },
    password: {
        type: String,
    },
    cartData: {
        type: Object,
    },
    date: {
        type: Date,
        default: Date.now,
    },
})


// ADD USERS - SIGNUP
app.post('/signup', async (req, res) => {

    let check = await Users.findOne({ email: req.body.email });
    if (check) {
        return res.status(400).json({ success: false, error: 'existing user found with same email' })
    }

    let cart = {};
    for (let i = 0; i < 50; i++) {
        cart[i] = 0;
    }

    const user = new Users({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        cartData: cart,
    })

    await user.save();

    const data = {
        user: {
            id: user.id
        }
    }

    const token = jwt.sign(data, 'secret_ecom');
    res.json({ success: true, token })

})


// LOGIN
app.post('/login', async (req, res) => {
    let user = await Users.findOne({ email: req.body.email });
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user: {
                    id: user.id
                }
            }
            const token = jwt.sign(data, 'secret_ecom')
            res.json({ success: true, token })
        }
        else {
            res.status(400).json({ success: false, error: 'Wrong Password' });
        }
    }
    else {
        res.status(400).json({success: false, error: 'Wrong Email Address'})
    }
})


//ADD PRODUCT
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({})
    let id;
    if (products.length > 1) {
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else {
        id = 1;
    }
    const result = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    console.log(result)
    await result.save();
    console.log('saved');
    res.json({
        success: true,
        name: req.body.name,
    })
})


//REMOVE PRODUCT
app.post('/removeproduct', async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log('removed');
    res.json({
        success: true,
        name: req.body.name,
    })
})


//ALL PRODUCTS
app.get('/allproducts', async (req, res) => {
    const allproducts = await Product.find({});
    console.log('allproducts');
    res.send(allproducts);
})


// NEW COLLECTION
app.get('/newcollection', async (req,res) => {
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log('New collections fetched');
    res.send(newcollection);
})


// POPULAR
app.get('/popular', async (req,res) => {
    let products = await Product.find({});
    let popularcollection = products.slice(0,4)
    console.log('Popular collection fetched');
    res.send(popularcollection);
})


//CREATING MIDDLEWARE TO FETCH USERS
const fetchUser = async (req,res,next) => {
    const token = await req.header('auth-token')
    if (!token) {
        res.status(401).json({error: "Please authenticate with valid token"})
    }

    else {
        try {
            const data = jwt.verify(token, 'secret_ecom')
            req.user = data.user;
            next();
        } catch (error) {
            res.status(401).json({error: "Please authenticate using a valid token"});
        }
    }
}


// ADDING PRODUCTS IN CARTS
app.post('/addtocart',fetchUser,async (req,res) => {
    console.log('Added', req.body.itemId)
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.json({success:true})
})


// REMOVING PRODUCTS FROM CART
app.post('/removefromcart',fetchUser, async (req,res) => {
    console.log("removed", req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId] > 0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id}, {cartData:userData.cartData});
    res.json({success:true})    
})


// GET CARTDATA
app.post('/getcart', fetchUser, async (req,res) => {
    console.log('getcart');
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})


//HOME PAGE
app.get('/', (req, res) => {
    res.json('express running');
})


//IMAGE STORAGE ENGINE
const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({ storage: storage });

//CREATING UPLOAD ENDPOINTS
app.use('/images', express.static('upload/images'))
app.post('/upload', upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:8000/images/${req.file.filename}`
    })
})


//LISTEN
app.listen(8000, (err) => {
    if (!err) {
        console.log('server running')
    }
    else { console.log(err) }
})