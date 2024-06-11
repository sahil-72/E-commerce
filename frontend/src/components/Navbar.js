import React, { useContext, useState } from 'react'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png'
import {
  Link
} from "react-router-dom";
import { ShopContext } from '../context/ShopContext';

export default function Navbar() {

  const [menu, setMenu] = useState('shop');
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container-fluid">
          <img src={logo} alt='logo' />
          <Link className="navbar-brand ms-2 fw-semibold" to="/">Stop&Shop</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" onClick={() => { setMenu('shop') }}>
                <Link className={`nav-link ${menu === 'shop' ? 'active' : ''}`} aria-current="page" to="/">Shop</Link>
              </li>
              <li className="nav-item" onClick={() => { setMenu('men') }}>
                <Link className={`nav-link ${menu === 'men' ? 'active' : ''}`} to="/men">Men</Link>
              </li>
              <li className="nav-item" onClick={() => { setMenu('women') }}>
                <Link className={`nav-link ${menu === 'women' ? 'active' : ''}`} to="/women">Women</Link>
              </li>
              <li className="nav-item" onClick={() => { setMenu('kid') }}>
                <Link className={`nav-link ${menu === 'kid' ? 'active' : ''}`} to="/kid">Kid</Link>
              </li>
            </ul>
            <div className="" role="search">
              {localStorage.getItem('auth-token')?<span><button onClick={() => {localStorage.removeItem('auth-token');window.location.replace("/")}} className="btn btn-danger me-3 rounded-pill px-3 text" type="submit">Logout</button></span>:<span><Link to='/login'><button className="btn btn-danger me-3 px-3 fw-semibold rounded-pill text" type="submit">Login</button></Link></span>}
              <span><Link to='/cart'><img src={cart_icon} alt='cart' className='me-3' /><span style={{ top: '1', left: '98%' }} className="position-absolute translate-middle badge rounded-pill bg-danger d-none d-lg-inline">
                {getTotalCartItems()}</span></Link></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}
