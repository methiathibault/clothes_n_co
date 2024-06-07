import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddButton from './AddButton';
import '../styles/Product.css'
import { useUserContext } from './AuthContext.jsx'


export default function Product() {
    let { idProduit } = useParams();
    const [product, setProduct] = useState({})
    const { verifyToken } = useUserContext();

    { verifyToken(); }

    function getProduct() {
        axios.get(`https://fakestoreapi.com/products/${idProduit}`)
            .then(res => setProduct(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct()
    }, [idProduit])

    return (
        <div className='product-container'>
            <div className='product'>
                <div className='product-image-container'>
                    <img className='product-image' src={product.image} alt={product.title} />
                </div>
                <div className='product-info'>
                    <h1 className='product-title'>{product.title}</h1>
                    <p className='product-category'>Category: {product.category}</p>
                    <p className='product-description'>{product.description}</p>
                    <p className='product-price'>{product.price}€</p>
                    <AddButton product={product} />
                </div>
            </div>
        </div>
    )
}
