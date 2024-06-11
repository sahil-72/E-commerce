import React from 'react'
import breadcrum_arrow from '../assets/breadcrum_arrow.png';

export default function Breadcrum(props) {
    const {product} = props;

    return (
      <div className='container mt-4'>
          HOME <img src={breadcrum_arrow} alt='' /> SHOP <img src={breadcrum_arrow} alt='' /> {product.category} <img src={breadcrum_arrow} alt='' /> {product.name} <img src={breadcrum_arrow} alt='' />
      </div>
    )
}
