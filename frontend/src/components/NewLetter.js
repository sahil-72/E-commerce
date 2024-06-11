import React from 'react'

export default function NewLetter() {
  return (
    <div className='container newletter-div py-5' >
        <h1 className='fw-bold text-center' >Get Exclusive Offers On Your Email</h1>
        <p className='text-center py-3'>Subscribe to our newsletter and stay updated</p>
        <div className='d-flex justify-content-center'>
        <input type="email" style={{width: '400px'}} className="form-control border-dark rounded-pill" id="exampleFormControlInput1" placeholder="Your Email id" />
        <button className='btn btn-dark rounded-pill'>Subscribe</button>
        </div>
    </div>
  )
}
