import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../styles/Products.css'
import AddButton from './AddButton'


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
        <div className='products-home'>
            <div className='products'>
                {products.map(product => (
                    <Link to={`/product/${product.id}`} key={product.id}>
                        <div key={product.id} className='product-card'>
                            <h3 className='product-title'>{product.title}</h3>
                            <img className='product-image' src={product.image} alt={product.title} />
                            <p className='product-price'>{product.price}</p>
                            <div onClick={(e) => e.stopPropagation()}>
                                <AddButton product={product} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
