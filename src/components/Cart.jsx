import React, { useEffect, useState } from 'react'

export default function Cart() {
    const [cart, setCart] = useState([])

    let totalPrice = 0;

    useEffect(() => {
        let cart = []
        for (let key of Object.keys(localStorage)) {
            if (key === 'token') continue
            cart.push(JSON.parse(localStorage.getItem(key)));
        }
        if (cart.length !== 0) {
            setCart(cart)
        }
    }, [])
    const calculateTotalPrice = () => {
        cart.forEach(product => {
            totalPrice += product.price * product.quantity
        });
        return totalPrice;
    }

    const incrementQuantity = (product) => {
        product.quantity += 1;
        localStorage.setItem(product.id, JSON.stringify(product));
        setCart([...cart]);
    }

    const decrementQuantity = (product) => {
        if (product.quantity > 0) {
            product.quantity -= 1;
            if (product.quantity == 0) return removeProduct(product);
            localStorage.setItem(product.id, JSON.stringify(product));
            setCart([...cart]);
        }

    }

    const removeProduct = (product) => {
        localStorage.removeItem(product.id);
        setCart(cart.filter(item => item.id !== product.id));
    }

    const clearCart = () => {
        localStorage.clear();
        setCart([]);
    }

    return (
        <div>
            {cart.map(product => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <img src={product.image} alt={product.title} />
                    <p>{product.price}</p>
                    <button onClick={() => incrementQuantity(product)}>+</button>
                    <p>{product.quantity}</p>
                    <button onClick={() => decrementQuantity(product)}>-</button>
                    <p>{product.price * product.quantity}</p>
                    <button onClick={() => removeProduct(product)}>Remove</button>
                </div>
            ))}
            <h3>Total Price: {calculateTotalPrice()}</h3>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}
