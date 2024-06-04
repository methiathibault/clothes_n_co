import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import AddButton from './AddButton';

export default function Product() {
    let { idProduit } = useParams();
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)

    console.log(idProduit)
    function getProduct() {
        axios.get(`https://fakestoreapi.com/products/${idProduit}`)
            .then(res => {
                setProduct(res.data)
                const initialQuantity = JSON.parse(localStorage.getItem(res.data.id))?.quantity || 0
                setQuantity(initialQuantity)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getProduct()
    }, [idProduit])

    return (
        <div className='product'>
            <h1 className='product-title'>{product.title}</h1>
            <img className='product-image' src={product.image} alt={product.title} />
            <p className='product-description'>{product.description}</p>
            <p className='product-price'>{product.price}</p>
            <AddButton product={product} quantity={quantity} setQuantity={setQuantity} />
        </div>
    )
}
