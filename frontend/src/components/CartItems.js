import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import remove_icon from '../assets/cart_cross_icon.png';

export default function CartItems() {

    const { all_product, cartItems, removeFromCart, getTotalCartAmount } = useContext(ShopContext);

    return (
        <div className='mt-5 container'>
            <div className='fw-semibold row'>
                <span className='col-lg-2 col-sm-2' >Products</span>
                <span className='col-lg-3 col-sm-3'>Title</span>
                <span className='col-lg-2 col-sm-2'>Price</span>
                <span className='col-lg-2 col-sm-2'>Quantity</span>
                <span className='col-lg-2 col-sm-2'>Total</span>
                <span className='col-lg-1 col-sm-1'>Remove</span>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return <div className='container'>
                        <div className='row align-items-center'>
                            <div className='col-auto col-lg-2 col-sm-2'><img src={e.image} alt='' style={{ height: '100px' }} /></div>
                            <div className='col-auto col-lg-3 col-sm-3'><p>{e.name}</p></div>
                            <div className='col-auto col-lg-2 col-sm-2'><p className='ms-1'>${e.new_price}</p></div>
                            <div className='col-auto col-lg-2 col-sm-2'><button className='btn border-dark ms-3'>{cartItems[e.id]}</button></div>
                            <div className='col-auto col-lg-2 col-sm-2'><p className='ms-2'>${e.new_price * cartItems[e.id]}</p></div>
                            <div className='col-auto col-lg-1 col-sm-1 text-center'><img src={remove_icon} style={{cursor: 'pointer'}} onClick={() => { removeFromCart(e.id) }} alt='' /></div>
                        </div>
                        <hr />
                    </div>
                }
                return null;
            })}
            <div className='row mt-5'>
                <div className='col-lg-6'>
                    <h2 className='fw-semibold'>Cart Totals</h2>
                    <div className='d-flex justify-content-between'>
                        <span>Subtotal</span>
                        <span>${getTotalCartAmount()}</span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <span>Shipping Fee</span>
                        <span>FREE</span>
                    </div>
                    <hr />
                    <div className='d-flex justify-content-between'>
                        <span className='fw-semibold fs-4'>Total</span>
                        <span className='fs-4 '>${getTotalCartAmount()}</span>
                    </div>
                    <hr />
                    <button className='btn btn-danger my-3'>PROCEED TO CHECKOUT</button>
                </div>
                <div className='col-lg-6'>
                    <p>If you have a promo code, Enter it here.</p>
                    <input type="email" style={{ width: '400px' }} className="form-control border-dark rounded mb-2" id="exampleFormControlInput1" placeholder="promo code" />
                    <button className='btn btn-dark'>Submit</button>
                </div>
            </div>
        </div>
    )
}
