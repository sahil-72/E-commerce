import React from 'react'
import hand_icon  from '../assets/hand_icon.png';
import arrow from '../assets/arrow.png'
import hero_image from '../assets/hero_image.png'

export default function Hero() {
  return (
    <div className='container-fluid hero-div pt-5 mb-5'>
        <div className='row'>
            <div className='col-md-6' style={{paddingLeft:'130px', paddingTop: '50px'}}>
                    <h4 className='fw-bold mb-5'>NEW ARRIVALS ONLY</h4>
                    <div>
                    <span className='fs-1 fw-bold' >new</span>
                    <img src={hand_icon} alt='hand_icon' style={{height: '80px'}} />
                    </div>
                    <p className='fs-1 fw-bold'>collections</p>
                    <p className='fs-1 fw-bold'>for everyone</p>
                    <div className='px-3 py-2 d-flex justify-content-center rounded-pill bg-danger' style={{ width: 'fit-content'}}>
                        <span className='fw-bold me-2' style={{color: 'white'}}>Latest Collections</span>
                        <img src={arrow} alt='arrow' style={{height: '15px', marginTop: '7px'}} />
                    </div>
            </div>
            <div className='col-md-6 d-flex justify-content-center d-none d-md-inline-block'>
                    <img src={hero_image} alt='hero_image' style={{height: '550px'}} />
            </div>   
        </div>
    </div>
  )
}
