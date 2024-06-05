import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Products.css'
import ProductsRender from './ProductsRender'

export default function Products() {
    const [products, setProducts] = useState([])

    function getAllProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
       <ProductsRender products={products} />
    )
}
