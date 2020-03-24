import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'


class ProductListItem extends Component {

    state = {
        productCount:1,
    }

    onIncrementClick = () => {
        this.setState((prevState)=>({
            productCount:prevState.productCount + 1
        }))
    }
    
    onDecrementClick = () => {
        this.setState((prevState)=>({
            productCount:prevState.productCount - 1
        }))
    }
    
    render() {
        const {
            id,
            name,
            description,
            type,
            capacity,
            price,
            image,
            addProductToCart
        } = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt={description} title={name}/>
                </div>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-quantity">
                    <button 
                        onClick={this.onDecrementClick}
                        disabled={this.state.productCount<=1}
                        >-</button>
                    <input type="text" value={this.state.productCount} readOnly/>
                    <button 
                        onClick={this.onIncrementClick}
                        disabled={this.state.productCount>=10}
                        >+</button>
                </div>
                <div className="product-price">{price}$</div>
                <button 
                    className="btn-add-to-cart"
                    onClick={()=>addProductToCart(this.state.productCount,id)}
                >Add to cart
                </button>
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

ProductListItem.defaultProps = {
    description:"No description"
}

export default ProductListItem