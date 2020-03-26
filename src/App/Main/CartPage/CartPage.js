import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from './../Products/productsData'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'



const CartPage = ({
    productsInCart,
    productsObj = getProductsMap(productsData),
}) => {
    return (
        <div>
            <CartProductList productsInCart={productsInCart} />
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage