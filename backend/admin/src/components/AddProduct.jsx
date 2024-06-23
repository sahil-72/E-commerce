import React, { useState } from 'react'
import upload_area from '../assets/upload_area.svg'

export default function AddProduct() {

    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "Women",
        new_price: "",
        old_price: "",
    })

    const [image, setImage] = useState(false);

    const imageHandler = (e) => {
        setImage(e.target.files[0])
    }

    const changeHandler = (e) => {
        setProductDetails({ ...productDetails, [e.target.name]: e.target.value })
    }

    const addProduct = async () => {
        console.log(productDetails)
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append('product', image);

        await fetch('https://stopshop-background.onrender.com/upload', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: formData,
        }).then((resp) => resp.json()).then((data) => { responseData = data })

        if (responseData.success) {
            product.image = responseData.image_url;
            
            await fetch('https://stopshop-background.onrender.com/addproduct',{
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(product),
            }).then((resp) => resp.json()).then((data) => {
                data.success?alert('Product Added'):alert('Failed')
            })
        }
    }

    return (
        <div className='container mt-3'>
            <h2 className='fw-semibold'>Add Product</h2>
            <div className="mb-3 mt-4">
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Title</label>
                <input type="text" value={productDetails.name} name='name' onChange={changeHandler} className="form-control" id="exampleFormControlInput1" placeholder="Type Here" style={{ maxWidth: '1110px' }} />
            </div>
            <div className="row">
                <div className="mb-3 mt-2 col-md-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                    <input type="number" value={productDetails.old_price} onChange={changeHandler} name='old_price' className="form-control" id="exampleFormControlInput1" placeholder="Type Here" style={{ maxWidth: '450px' }} />
                </div>
                <div className="mb-3 mt-2 col-md-6">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Offer Price</label>
                    <input type="number" value={productDetails.new_price} onChange={changeHandler} name='new_price' className="form-control" id="exampleFormControlInput1" placeholder="Type Here" style={{ maxWidth: '450px' }} />
                </div>
            </div>
            <div>
                <label htmlFor="exampleFormControlInput1" className="form-label">Product Catergory</label>
                <select className="form-select" value={productDetails.category} name='category' onChange={changeHandler} aria-label="Default select example" style={{ maxWidth: '1110px' }}>
                    <option value="Women">Women</option>
                    <option value="Men">Men</option>
                    <option value="Kid">Kid</option>
                </select>
            </div>
            <div className="mb-3 mt-3">
                <label htmlFor="file-input" className="form-label">
                    <img src={image ? URL.createObjectURL(image) : upload_area} alt='' style={{ height: '120px', width: '130px' }} />
                </label>
                <input type="file" onChange={imageHandler} className="form-control" id="file-input" placeholder="Type Here" style={{ maxWidth: '450px' }} />
                <button onClick={addProduct} className='btn btn-primary mt-2 d-block' >ADD</button>
            </div>
        </div>
    )
}
