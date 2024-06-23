import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddProduct from '../components/AddProduct';
import ListProduct from '../components/ListProduct';

export default function Admin() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route exact path='/addproduct' element={<AddProduct />}></Route>
        <Route exact path='/listproduct' element={<ListProduct />}></Route>
      </Routes>
    </div>
  )
}
