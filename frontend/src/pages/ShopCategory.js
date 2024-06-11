import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../assets/dropdown_icon.png'
import Item from '../components/Item';

export default function ShopCategory(props) {

  const {all_product}  = useContext(ShopContext);

  return (
    <div className='container mt-4'>
      <img src={props.banner} alt='banner' />
      <div className='py-4 d-flex justify-content-between'>
        <div>
          <span className='fw-bold'>Showing 1-12</span> out 0f 36 products
        </div>
        <div className='border border-dark  px-3 py-1 rounded-pill' style={{ width: 'fit-content' }}>
          Sort by
          <img className='ps-2' src={dropdown_icon} alt='icon' />
        </div>
      </div>
      <div className='row'>
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return <div className='col-sm-6 col-lg-4 col-xxl-3'><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /></div>
          }
          else {
            return null;
          }
          
        })}
      </div>
      <div className='d-flex justify-content-center mt-5 p-1'>
        <button className='btn btn-dark rounded'>Explore More</button>
      </div>
    </div>
  )
}
