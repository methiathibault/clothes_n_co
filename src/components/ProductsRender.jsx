import React from 'react'
import { Link } from 'react-router-dom'
import AddButton from './AddButton'
import '../styles/ProductsRender.css'


export default function ProductsRender({ products }) {
    return (
        <div className='products'>
            {products.map(product => (
                <>
                    <Link className='product-link' to={`/product/${product.id}`} key={product.id}>
                        <div key={product.id} className='product-card'>
                            <h3 className='product-title'>{product.title}</h3>
                            <img className='product-image' src={product.image} alt={product.title} />
                            <p className='product-price'>{product.price}€</p>
                            <AddButton product={product} />
                        </div>
                    </Link>
                </>
            ))}
        </div>
    )
}
