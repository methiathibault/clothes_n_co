import { React, useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/Products.css'
import ProductsRender from './ProductsRender'

export default function Products() {
    const [products, setProducts] = useState([])
    const [quantities, setQuantities] = useState({})

    function getAllProducts() {
        axios.get('https://fakestoreapi.com/products')
            .then(res => setProducts(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    useEffect(() => {
        const newQuantities = {};
        products.forEach(product => {
            newQuantities[product.id] = JSON.parse(localStorage.getItem(product.id))?.quantity || 0;
        });
        setQuantities(newQuantities);
    }, [products]);

    return (
       <ProductsRender products={products} quantities={quantities} setQuantities={setQuantities} />
    )
}
