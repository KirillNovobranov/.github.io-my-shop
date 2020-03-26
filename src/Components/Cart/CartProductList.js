import React from 'react'
import {keys} from 'lodash'
import productsData, { getProductsMap } from '../../App/Main/Products/productsData'

const CartProductList = ({
    productsInCart,
    productsObj=getProductsMap(productsData)
}) => {
    return (
        <div>
            {   
                keys(productsInCart).map((productId)=>{
                    return (
                        <div key={productId}>{productsObj[productId].name} : {productsInCart[productId]}</div>
                    )
                })
            }
        </div>
    )
}

export default CartProductList