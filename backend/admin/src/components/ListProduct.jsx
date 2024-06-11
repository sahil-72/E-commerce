import React, { useState, useEffect } from 'react'
import cross_icon from '../assets/cross_icon.png';

export default function ListProduct() {

  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:8000/allproducts').then((resp) => resp.json()).then((data) => { setAllproducts(data) })
  }

  useEffect(() => {
    fetchInfo();
  }, [])

  const remove_product = async (id) => {
    await fetch('http://localhost:8000/removeproduct', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({id:id})
    })
    await fetchInfo();
  }

  return (
    <div className='container mt-3' >
      <h2 className='fw-semibold'>All Products List</h2>
      <div className='fw-semibold row'>
        <span className='col-lg-2 col-sm-2' >Products</span>
        <span className='col-lg-3 col-sm-3'>Title</span>
        <span className='col-lg-2 col-sm-2'>Old Price</span>
        <span className='col-lg-2 col-sm-2'>New Price</span>
        <span className='col-lg-2 col-sm-2'>Category</span>
        <span className='col-lg-1 col-sm-1'>Remove</span>
      </div>
      <div>
        <hr />
        {allproducts.map((product, i) => {
          return <div className='container mt-4 text-start'>
            <div key={i} className='row align-items-center'>
              <div className='col-auto col-lg-2 col-sm-2'><img src={product.image} alt='' style={{ height: '100px', width: '90px' }} /></div>
              <div className='col-auto col-lg-3 col-sm-3'><p>{product.name}</p></div>
              <div className='col-auto col-lg-2 col-sm-2'><p className='ms-2'>${product.old_price}</p></div>
              <div className='col-auto col-lg-2 col-sm-2'><p className='ms-4'>${product.new_price}</p></div>
              <div className='col-auto col-lg-2 col-sm-2'><p className='ms-4'>{product.category}</p></div>
              <div className='col-auto col-lg-1 col-sm-1 text-center'><img src={cross_icon} alt='' onClick={() => remove_product(product.id)} style={{ cursor: 'pointer' }} /></div>
            </div>
            <hr />
          </div>
        })}
      </div>
    </div>
  )
}
