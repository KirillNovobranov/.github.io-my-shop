import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
}) => {
    return (
        <div>
            <CartProductList 
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
            />
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage