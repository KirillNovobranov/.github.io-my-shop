import React from 'react'
import {keys} from 'lodash'
import './cart.css'

const Cart = ({
   productsInCart
}) => {

    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) =>(
                    <div>{productId} : {productsInCart[productId]}</div>
                ))

            }
        </div>
    )
}

export default Cart