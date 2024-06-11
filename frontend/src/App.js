import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/cart';
import Footer from './components/Footer';
import men_banner from './assets/banner_mens.png';
import women_banner from './assets/banner_women.png';
import kid_banner from './assets/banner_kids.png';
import LoginSignup from './pages/LoginSignup';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Shop/>} ></Route>
        <Route exact path='/men' element={<ShopCategory banner={men_banner} category='Men'/>} ></Route>
        <Route exact path='/women' element={<ShopCategory banner={women_banner} category='Women'/>} ></Route>
        <Route exact path='/kid' element={<ShopCategory banner={kid_banner} category='Kid'/>} ></Route>
        <Route exact path='/product' element={<Product />} >
          <Route exact path=':productId' element={<Product />} ></Route>
        </Route>
        <Route exact path='/cart' element={<Cart />}></Route>
        <Route exact path='/login' element={<LoginSignup />}></Route>        
      </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;
