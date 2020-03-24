import React from 'react'
import {keys} from 'lodash'
import productsData from './../Products/productsData'


const productsObj = productsData.reduce((accObj,product)=>({
    ...accObj,
    [product.id]:product,
}),{})

const CartPage = ({
    productsInCart
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
            <div>
                Total: 
                {   //[1,2]
                    keys(productsInCart).reduce((total,productId)=>(
                        total + (productsObj[productId].price * productsInCart[productId])
                    ),0)
                
                } $
            </div>
        </div>
    )
}



export default CartPage