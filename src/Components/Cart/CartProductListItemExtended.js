import React from 'react'

const CartProductListItemExtended = ({
    product,
    productCount
}) => {
    return (
        <div>
            {product.name} : {productCount} : price for 1 item = {product.price}
        </div>
    )
}

export default CartProductListItemExtended