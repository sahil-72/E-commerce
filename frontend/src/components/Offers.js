import React from 'react'
import exclusive_image from '../assets/exclusive_image.png';

export default function Offers() {
  return (
    <div className='container-sm offers-div'>
        <div className='row'>
            <div className='col-md-6' style={{paddingLeft:'130px', paddingTop: '80px'}}>
                <h1 className='fw-bold mb-3 '>Exclusive</h1>
                <h1 className='fw-bold mb-3'>Offers For You</h1>
                <p className='fw-bold'>ONLY ON BEST SELLER PRODUCTS</p>
                <button className='btn btn-danger rounded-pill'>Check Now</button>
            </div>
            <div className='col-md-6 d-flex justify-content-center'>
                <img src={exclusive_image} alt='exclusive_image' style={{height: '450px'}} />
            </div>
        </div>
    </div>
  )
}
