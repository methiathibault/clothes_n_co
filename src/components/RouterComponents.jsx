import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import Cart from './Cart'
import Login from './Login'

export default function RouterComponents() {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product/:idProduit' element={<Product />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
