import React, { useEffect, useState } from 'react'
import Item from './Item';

export default function Popular() {

  const [data, setdata] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/popular').then((resp) => resp.json()).then((info) => setdata(info))
  }, [])

  return (
    <div className='container my-4' >
        <h1 className='text-center'>POPULAR IN WOMEN</h1>
        <div className='d-flex justify-content-center'><hr style={{opacity: '1', width: '300px'}} /></div>
        <div className='row justify-content-center'>
            {data.map((item, i) => {
                return <div className='col-auto col-sm-6 col-lg-4 col-xxl-3'><Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} /></div>
            })}
        </div>

    </div>
  )
}
