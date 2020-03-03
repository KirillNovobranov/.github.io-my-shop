import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {

    // constructor() {
    //     super()
    //     this.state = {
    //         productCount:2,
    //     }
    // }

    // constructor() {
    //     super()
    //     this.onIncrementClick = this.onIncrementClick.bind(this)
    // }



    state = {
        productCount:1,
        color: "green"
    }

    onIncrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount + 1
        }))
    }

    onDecrementClick = () => {
        this.setState((prevState) => ({
            productCount: prevState.productCount - 1
        }))
    }

    changeColor () {
        this.setState({color:"red"})
    }
    
    // onIncrementClick () {
    //     this.setState((prevState) => ({
    //         productCount:prevState.productCount + 1
    //     }))
    // }

    render() {

        const {
            name, 
            description, 
            type, 
            capacity, 
            price,
            image
        } = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt={description} title={name} height="102px" />
                </div>
                <p>Color:green</p>
                <button onClick={() => this.changeColor()}>Change color</button>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-quantity">
                    <button onClick={() => this.onDecrementClick()}>-</button>
                    <input type="text" value={this.state.productCount} readOnly />
                    <button onClick={()=>this.onIncrementClick()}>+</button>
                </div>
                <div className="product-price">{price} $</div>
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