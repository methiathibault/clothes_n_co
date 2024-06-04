import { React } from 'react'

export default function AddButton({ product, quantity, setQuantity }) {

    const add = () => {
        localStorage.setItem(product.id, JSON.stringify({ ...product, quantity: quantity + 1 }))
        setQuantity(quantity + 1)
    }

    return (
        <button onClick={add}>Add to cart</button>
    )
}
