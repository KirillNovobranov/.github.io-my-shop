import React from 'react'
import {keys} from 'lodash'
import productsData, {getProductsMap} from './../Products/productsData'
import CartTotal from '../../../Components/Cart/CartTotal'



const CartPage = ({
    productsInCart,
    productsObj = getProductsMap(productsData),
}) => {
    return (
        <div>
            <h1 className="page-title"> Cart Page</h1>
            {   
                keys(productsInCart).map((productId)=>{
                    return (
                    <div key={productId}>{productsObj[productId].name} : {productsInCart[productId]} : price = {productsObj[productId].price}</div>
                    )
                })
            }
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage