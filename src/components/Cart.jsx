import React, { useEffect, useState } from 'react'
import {useUserContext} from './AuthContext.jsx'
import { useNavigate } from "react-router-dom"

export default function Cart() {
    const [cart, setCart] = useState([])
    const {isConnected} = useUserContext();
    const navigate = useNavigate();

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
        cart.map(element => localStorage.removeItem(element.id))
        setCart([]);
    }

    const buyCart = () =>{
        
        if(isConnected){
            alert("Fuck you")
            clearCart();
        }else{
            navigate("/login")
        }
    }

    if(cart.length != 0){
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
                <button onClick={buyCart}>Buy</button>
            </div>
        )
    }else{
        return(
            <div>
                <h1>Nothing in your cart</h1>
            </div>
        )
    }
    
}
