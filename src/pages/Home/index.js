import React from 'react';
import { useState } from 'react';
import Cart from '../../components/Cart'
import Header from '../../components/Header'
import Main from '../../components/Main'
import data from '../../data'

function Home() {
    const { products } = data;
    const [cartItems, setCartItems] = useState([]);

    const onAddItem = (product) => {
        const isListed = cartItems.find(item => item.id === product.id);
        if (isListed) {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...isListed, quantity: isListed.quantity + 1 } : item))
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    const onRemoveItem = (product) => {
        const isListed = cartItems.find((item) => item.id === product.id);
        if (isListed.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.id !== product.id));
        } else {
            setCartItems(cartItems.map(item =>
                item.id === product.id ? { ...isListed, quantity: isListed.quantity - 1 } : item))
        }
    }

    return (
        <div>
            <Header cartCount={cartItems.length} cartActive={true}></Header>
            <div className="row">
                <Main onAddItem={onAddItem} products={products}></Main>
                <Cart onAddItem={onAddItem} onRemoveItem={onRemoveItem} cartItems={cartItems}></Cart>
            </div>
        </div>
    )
}

export default Home;