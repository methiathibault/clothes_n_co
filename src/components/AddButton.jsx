import { React, useState, useEffect } from 'react'

export default function AddButton({ product }) {
    const [quantity, setQuantity] = useState(0)


    const add = (product) => {
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
    }

    return (
        <button onClick={() => add(product)}>Add to cart</button>
    )
}
