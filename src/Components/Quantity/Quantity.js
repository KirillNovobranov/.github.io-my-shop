import React from 'react'
import './Quantity.css'


const Quantity = ({
    productCount,
    onDecrementClick,
    onIncrementClick,
    minCount
}) => {
    
    return (
        <div className="product-quantity">
            <button 
                onClick={() => onDecrementClick()}
                disabled={productCount<=minCount}
            >-</button>
            <input type="text" value={productCount} readOnly/>
            <button 
                onClick={() => onIncrementClick()}
                disabled={productCount>=10}
            >+</button>
        </div>
    )
}

export default Quantity