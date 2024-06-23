import React, { useEffect, useState } from 'react'
import new_collections from '../assets/new_collections';
import Item from './Item'
 
export default function NewCollections() {

  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    fetch('https://stopshop-background.onrender.com/newcollection').then((resp) => resp.json()).then((data) => setNew_collections(data))
  }, [])
  
  return (
    <div className='container my-4'>
        <h1 className='text-center fw-semibold'>NEW COLLECTIONS</h1>
        <div className='d-flex justify-content-center'><hr style={{opacity: '1', width: '300px'}} /></div>
        <div className='row justify-content-center'>
            {new_collections.map((item, i) => {
                    return <div className='col-auto col-sm-6 col-lg-4 col-xxl-3'><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /></div>
            })}
        </div>
    </div>
  )
}
