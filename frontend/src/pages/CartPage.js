import React from 'react';

const CartPage = () => {
    // Placeholder cart items, normally this would come from Redux or local state
    const cartItems = [
        { name: 'Product 1', quantity: 2, price: 50 },
        { name: 'Product 2', quantity: 1, price: 100 }
    ];

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {cartItems.map((item, index) => (
                    <li key={index}>
                        {item.name} - {item.quantity} x ${item.price}
                    </li>
                ))}
            </ul>
            <button>Proceed to Checkout</button>
        </div>
    );
};

export default CartPage;

