import React from 'react'
import './cart.css'

const Cart = ({
    total,
    price
}) => {

    return (
        <div className="cart text-center">
            <div className="products-count">{total}</div>
            <div className="products-price">${price}</div>
        </div>
    )
}

export default Cart