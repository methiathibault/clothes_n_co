import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './Products'

export default function RouterComponents() {
    return (
        <Routes>
            <Route path='/' element={<Products />} />
            {/* <Route path='/Cart' element={<Cart />} />
            <Route path='/Login' element={<Login />} /> */}
        </Routes>
    )
}
