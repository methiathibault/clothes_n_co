import React, { useEffect, useState } from 'react'
import { useUserContext } from './AuthContext.jsx'
import { useNavigate } from "react-router-dom"
import '../styles/Cart.css'

export default function Cart() {
    const [cart, setCart] = useState([])
    const { isConnected } = useUserContext();
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
        return Math.round(totalPrice * 100) / 100;
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

    const buyCart = () => {
        if (isConnected) {
            alert("Thank you for your purchase !")
            clearCart();
        } else {
            navigate("/login")
        }
    }

    if (cart.length != 0) {
        return (
            <div className='cart-container'>
                <div className='cart-item'>
                    {cart.map(product => (
                        <div className='cart-product' key={product.id}>
                            <h3 className='cart-product-title'>{product.title}</h3>
                            <img className='cart-product-image' src={product.image} alt={product.title} />
                            <p className='cart-product-price'>{product.price}€</p>
                            <div className='cart-product-controls'>
                                <button className='cart-product-button' onClick={() => decrementQuantity(product)}>-</button>
                                <p className='cart-product-quantity'>{product.quantity}</p>
                                <button className='cart-product-button' onClick={() => incrementQuantity(product)}>+</button>
                            </div>
                            <p className='cart-product-total-price'>Total: {Math.round((product.price * product.quantity) * 100) / 100}€</p>
                            <button className='button button-remove' onClick={() => removeProduct(product)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className='total-price-container'>
                    <h3 className='total-price'>Total Price: {calculateTotalPrice()}€</h3>
                    <div className='cart-action'>
                        <button className='button button-remove button-clear' onClick={clearCart}>Clear Cart</button>
                        <button className='button button-buy' onClick={buyCart}>Buy</button>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <h1>Nothing in your cart</h1>
            </div>
        )
    }

}
