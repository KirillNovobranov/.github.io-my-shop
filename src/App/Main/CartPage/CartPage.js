import React from 'react'
import CartTotal from '../../../Components/Cart/CartTotal'
import CartProductList from '../../../Components/Cart/CartProductList'
import CartProductListItemExtended from '../../../Components/Cart/CartProductListItemExtended'


const CartPage = ({
    productsInCart,
    removeProductFromCart,
    add,
    remove,
}) => {
    return (
        <div>
            <CartProductList 
                productsInCart={productsInCart}
                CartItem={CartProductListItemExtended}
                removeProductFromCart={removeProductFromCart}
                add={add}
                remove={remove}
            />
            <CartTotal productsInCart={productsInCart}/>
        </div>
    )
}

export default CartPage