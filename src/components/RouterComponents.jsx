import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'
import Product from './Product'
import Login from './Login'
import Testing from './Testing'
import Category from './Category'
import {useUserContext} from './AuthContext.jsx'

export default function RouterComponents() {
    const {tokenDisconnect} = useUserContext();
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            <Route path='/product/:idProduit' element={<Product />} />
            <Route path='/login' element={<Login />} />
            <Route path='/testing' element={<Testing />} />
            <Route path='/category/:categor' element={<Category />} />
            {/* <Route path='/testing' element={tokenDisconnect()} /> */}
            {/* <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} /> */}
        </Routes>
    )
}
