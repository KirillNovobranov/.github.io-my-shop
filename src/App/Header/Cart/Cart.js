import React from 'react'
import {keys} from 'lodash'
import './cart.css'
import productsData from './../../Main/Products/productsData'

const productsObj = productsData.reduce((accObj, product) => ({
    ...accObj,
    [product.id]: product,
}),{})

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
            } <div>
                Total:
                {
                    keys(productsInCart).reduce((total,productId) => (
                        total + (productsInCart[productId] * productsObj[productId].price)
                    ), 0)

                } 
                $
                </div>
        </div>        
    )
}

export default Cart