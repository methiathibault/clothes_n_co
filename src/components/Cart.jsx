import React, { useEffect, useState} from 'react'

export default function Cart() {
    const [cart, setCart] = useState([])
    
    let totalPrice = 0;

    useEffect(() => {
        setCart(Object.keys(localStorage).map(key => JSON.parse(localStorage.getItem(key))))
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
            localStorage.setItem(product.id, JSON.stringify(product));
            setCart([...cart]);
        }
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
                </div>
            ))}
            <h3>Total Price: {calculateTotalPrice()}</h3>
        </div>
    )
}
