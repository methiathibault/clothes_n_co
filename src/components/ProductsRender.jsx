import React from 'react'
import { Link } from 'react-router-dom'
import AddButton from './AddButton'

export default function ProductsRender({ products, quantities, setQuantities }) {
    return (
        <div className='products-home'>
            <div className='products'>
                {products.map(product => (
                    <>
                        <Link to={`/product/${product.id}`} key={product.id}>
                            <div key={product.id} className='product-card'>
                                <h3 className='product-title'>{product.title}</h3>
                                <img className='product-image' src={product.image} alt={product.title} />
                                <p className='product-price'>{product.price}</p>
                            </div>
                        </Link>
                        <AddButton product={product} quantity={quantities[product.id] || 0} setQuantity={(newQuantity) => {
                            setQuantities({ ...quantities, [product.id]: newQuantity });
                        }} />
                    </>
                ))}
            </div>
        </div>
    )
}
