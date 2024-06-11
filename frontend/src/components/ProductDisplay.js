import React, { useContext } from 'react'
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { ShopContext } from '../context/ShopContext';


export default function ProductDisplay(props) {

    const { product } = props;
    const {addToCart} = useContext(ShopContext);

    return (
        <div className='container mt-5' >
            <div className='row'>
                <div className='col-md-6'>
                    <div>
                        <img src={product.image} alt='' style={{width: '350px', height: '500px'}} />
                    </div>
                </div>
                <div className='col-md-6'>
                    <h1 className='fw-semibold'>{product.name}</h1>
                    <div>
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_icon} alt='' />
                        <img src={star_dull_icon} alt='' />
                        <p>122</p>
                    </div>
                    <span className='text-decoration-line-through fw-semibold me-2 fs-5'>${product.old_price}</span>
                    <span className='text-danger fw-semibold fs-5'>${product.new_price}</span>
                    <div className='my-4'>
                        Top in lightweight sweatshirt fabric made from a cotton blend with a soft brushed inside. Round, rib-trimmed neckline, dropped shoulders, long sleeves and wide ribbing at the cuffs and hem. Loose fit for a generous but not oversized silhouette.
                    </div>
                    <div>
                        <h3 className='fw-bold'>Select Size</h3>
                    </div>
                    <div className='my-3'>
                        <span className='fw-semibold my-2 me-2 border px-3 py-1'>S</span>
                        <span className='fw-semibold my-2 me-2 border px-3 py-1'>M</span>
                        <span className='fw-semibold my-2 me-2 border px-3 py-1'>L</span>
                        <span className='fw-semibold my-2 me-2 border px-3 py-1'>XL</span>
                        <span className='fw-semibold my-2 me-2 border px-3 py-1'>XXL</span>
                    </div>
                    <button onClick={() => addToCart(product.id)} className='btn btn-danger px-4 py-2 my-2'>ADD TO CART</button>
                <p><span className='fw-semibold'>Category :</span>T-Shirt, Crop Top</p>
                <p><span className='fw-semibold'>Tags :</span>Modern , Latest</p>
                </div>

            </div>
        </div>
    )
}
