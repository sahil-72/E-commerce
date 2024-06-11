import React from 'react'
import {
  Link
} from "react-router-dom";

export default function Item(props) {
  return (
    <div className='mb-4' style={{cursor: 'pointer'}}>
        <Link to={`/product/${props.id}`}><img onClick={window.scrollTo(0,0)} src={props.image} alt='props image' style={{height: '350px'}}/></Link>
        <p >{props.name}</p>
        <div>
            <span className='fw-bold me-2'>
                ${props.new_price}
            </span>
            <span className='fw-light'>
                ${props.old_price}
            </span>
        </div>
    </div>
  )
}
