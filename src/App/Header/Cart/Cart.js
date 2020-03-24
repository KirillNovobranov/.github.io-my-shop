import React from 'react'
import {keys} from 'lodash'
import {Link} from 'react-router-dom'
import './cart.css'
import productsData, {getProductsMap} from './../../Main/Products/productsData'


const Cart = ({
    productsInCart,
    productsObj = getProductsMap(productsData),
}) => {
    return (
        <div className="cart text-center">
            {   
                keys(productsInCart).map((productId)=>{
                    return (
                        <div key={productId}>{productsObj[productId].name} : {productsInCart[productId]}</div>
                    )
                })
            }
            <div>
                Total: 
                {   //[1,2]
                    keys(productsInCart).reduce((total,productId)=>(
                        total + (productsObj[productId].price * productsInCart[productId])
                    ),0)
                
                } $
            </div>
            <Link to="/cart">Show cart</Link>
        </div>
    )
}

export default Cart