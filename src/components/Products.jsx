import { React, useState, useEffect } from 'react'

export default function Products() {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
    }, [])

    return (
        <div className='products-home'>
            <h1>Products</h1>
            <div className='products'>
                {products.map(product => (
                    <div key={product.id} className='product'>
                        <h3>{product.title}</h3>
                        <img src={product.image} alt={product.title} />
                        <p>{product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
