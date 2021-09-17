import React, {useContext} from 'react';

import CartContext from '../context/CartContext';

export default function Cart() {

    const {cart, removeFromCart } = useContext(CartContext);
    let sum = 0;
    let itemSum = 0;

    cart.forEach((cart) => {
        sum+=cart.product.price * cart.quantity;
    })
    cart.forEach((cart) => {
        itemSum += cart.quantity
    })
    return (
        <div>
            <h1>Your Shooping Cart</h1>
            {cart.length > 0 ? (
                <h6> Total ({itemSum} items): ${sum}</h6>
            ): (
                <div></div>
            )}
            <div>
                {cart.length > 0 ? 
                cart.map((items) => (
                    <div key={items.product.id}>
                        <img src={items.product.image} alt={items.product.title} />
                        <h4>{items.product.title}</h4>
                        <p>Qty:{items.quantity}</p>
                        <p>Price:${items.product.price}</p>
                        <button onClick={() => removeFromCart(items.product.id)}>Remove</button>


                    </div>
                )) : "Whoops Your cart is emepty"}
            </div>
            
        </div>
    )
}
