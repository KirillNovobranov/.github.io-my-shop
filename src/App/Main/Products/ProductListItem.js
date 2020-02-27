import React from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

const ProductListItem = ({
    name,
    description = "No description",
    type,
    capacity,
    price,
    image = "/images/no-image.png",
}) => {
    return (
        <div className="product-list-item">
            <div className="product-img">
               <img src={image} alt={description} title={name} height="102px"/> 
            </div>
            <div className="product-title">{name}</div>
            <div className="product-description">{description}</div>
            <div className="product-features">Type: {type}</div>
            <div className="product-features">Capacity: {capacity} Gb</div>
            <div className="product-price">{price} $</div>
            <button className="btn-add-to-cart">Add to cart</button>
        </div>
    )
}

ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

// ProductListItem.defaultProps = {
//     description:"No description ..."
// }

export default ProductListItem