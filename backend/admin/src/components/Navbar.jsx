import React from 'react'
import logo from '../assets/logo.png';
import navprofile from '../assets/nav-profile.svg'
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <img src={logo} alt='logo' />
                    <a className="navbar-brand ms-2 fw-semibold" href="/">Stop&Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-semibold">
                            <li className="nav-item ms-3">
                                <i className="bi bi-cart-plus fs-5"></i>
                                <Link className="nav-link d-inline-block" aria-current="page" to="/addproduct">Add Product</Link>
                            </li>
                            <li className="nav-item ms-3">
                            <i className="bi bi-list-ul fs-5"></i>
                                <Link className="nav-link d-inline-block" aria-current="page" to="/listproduct">Product List</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <p className='mt-3 text-danger fw-semibold me-3'> Admin Panel</p>
                            <img className='' src={navprofile} alt='' />
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}


{/* <li className="nav-item">
    <div className="d-inline"><img src={list_product_icon} alt='' />
        <a className="nav-link active" aria-current="page" href="/">Add Product</a>
    </div>
</li> */}