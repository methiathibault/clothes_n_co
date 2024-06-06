import { React, useState, useEffect } from 'react'
import '../styles/AddButton.css'

export default function AddButton({ product }) {
    const [quantity, setQuantity] = useState(0)


    const add = (event, product) => {
        event.preventDefault();
        event.stopPropagation();
        if (!product) return
        const storedProduct = localStorage.getItem(product.id);
        let newQuantity;
        if (!storedProduct) {
            newQuantity = 1;
        } else {
            const storedQuantity = JSON.parse(storedProduct).quantity
            newQuantity = storedQuantity ? storedQuantity + 1 : 1
        }
        localStorage.setItem(product.id, JSON.stringify({ ...product, quantity: newQuantity }));
        setQuantity(newQuantity);
        alert(`${product.title}has been added to your cart`)
    }

    return (
        <button className='button' onClick={(event) => add(event, product)}>Add to cart</button>
    )
}
