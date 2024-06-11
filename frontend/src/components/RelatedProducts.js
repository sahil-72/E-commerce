import React from 'react'
import data_products from '../assets/data';
import Item from './Item';

export default function RelatedProducts() {
  return (
    <div className='container'>
        <h1 className='text-center fw-semibold'>Related Products</h1>
        <div className='d-flex justify-content-center mb-2'><hr style={{opacity: '1', width: '300px', height: ''}} /></div>
        <div className='row'>
            {data_products.map((item,i) => {
                return <div className='col-auto col-sm-6 col-lg-4 col-xxl-3'><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /></div>
            })}
        </div>
    </div>
  )
}
