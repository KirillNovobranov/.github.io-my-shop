import React from 'react'
import './Quantity.css'

const Quantity = ({
    productCount,
    onDecrementClick,
    onIncrementClick,
}) => {
    return (
        <div className="product-quantity">
            <button 
                onClick={onDecrementClick}
                disabled={productCount<=1}
            >-</button>
            <input type="text" value={productCount} readOnly/>
            <button 
                onClick={onIncrementClick}
                disabled={productCount>=10}
            >+</button>
        </div>
    )
}

export default Quantity