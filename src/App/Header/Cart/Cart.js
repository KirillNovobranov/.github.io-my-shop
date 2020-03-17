import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import productsData from './../../Main/Products/productsData'

console.log(productsData[1].name)

const Cart = ({
   productsInCart
}) => {

    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) =>(
                    <div key={productId}>{productsData[productId-1].name} : {productsInCart[productId]}</div>
                ))

            }
        </div>
    )
}

export default Cart