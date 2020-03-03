import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {
    render() {
        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={this.props.image} alt={this.props.description} title={this.props.name} height="102px" />
                </div>
                <div className="product-title">{this.props.name}</div>
                <div className="product-description">{this.props.description}</div>
                <div className="product-features">Type: {this.props.type}</div>
                <div className="product-features">Capacity: {this.props.capacity} Gb</div>
                <div className="product-quantity">
                    <button>-</button>
                    <input type="text" value="1" readOnly />
                    <button>+</button>
                </div>
                <div className="product-price">{this.props.price} $</div>
                <button className="btn-add-to-cart">Add to cart</button>
            </div>
        )
    }
}


ProductListItem.propTypes = {
    name:PropTypes.string.isRequired,
    description:PropTypes.string,
    type:PropTypes.string.isRequired,
    capacity:PropTypes.number.isRequired,
    price:PropTypes.number.isRequired,
    image:PropTypes.string,
}

ProductListItem.defaltProps = {
    description:"No description ..."
}

export default ProductListItem