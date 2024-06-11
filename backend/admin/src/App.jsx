import React from 'react'
import Navbar from './components/Navbar'
import Admin from './pages/Admin'
import AddProduct from './components/AddProduct'
import ListProduct from './components/ListProduct'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route exact path='/' element={<AddProduct />}></Route>
          <Route exact path='/addproduct' element={<AddProduct />}></Route>
          <Route exact path='/listproduct' element={<ListProduct />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App