import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import Login from './Login'
import Testing from './Testing'

export default function RouterComponents() {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:idProduit' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/testing' element={<Testing />} />
            {/* <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} /> */}
        </Routes>
    )
}
