import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import productsData from './../../Main/Products/productsData'

const productsObj = productsData.reduce((accObj, product) => ({
    ...accObj,
    [product.id]: product,
}),{})

console.log(productsObj)
console.log(productsData)

const Cart = ({
   productsInCart
}) => {

    return (
        <div className="cart text-center">
            {
                keys(productsInCart).map((productId) =>(
                    // <div key={productId}>{productsData[productId-1].name} : {productsInCart[productId]}</div>
                    <div key={productId}>{productsObj[productId].name} : {productsInCart[productId]}</div>
                ))

            }
        </div>
    )
}

export default Cart