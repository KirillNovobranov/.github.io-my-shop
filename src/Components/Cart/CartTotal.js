import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from '../../App/Main/Products/productsData'
// import {getProductsMap} from './../Products/productsData'

const CartTotal = ({
    productsInCart,
    productsObj = getProductsMap(productsData),
}) => {
    return (
        <div>
            Total: 
            {   
                keys(productsInCart).reduce((total,productId)=>(
                    total + (productsObj[productId].price * productsInCart[productId])
                ),0)
            
            } $
        </div>
    )
}

export default CartTotal