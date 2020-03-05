import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'

class ProductListItem extends Component {

    state = {
        productCount:1,
        // color: true
        color: "green",
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

    // changeColor () {
    //     this.setState(currentColor =>({
    //         color: !currentColor.color 
    //     }));  

    // }

    // Вариант из класса
    //  changeColor () {
    //     this.setState((prevState) => {
    //         if(prevState.color === "green") {
    //             return {
    //                 color:red
    //             }
    //         } else {
    //             return {
    //                 color:"green"
    //             }
    //         }
    //     })
    // }

    // Вариант 2 из класса
    // changeColor () {
    //     this.setState((prevState) =>(
    //         (prevState.color === "green") ? {color:"red"} : {color:"green"}
    //     ))
    // }

    changeColor () {
        const newColor = this.state.color === "green" ? "red" : "green"
        this.setState({color: newColor})
    }

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
                {/* <p>Color: {this.state.color ? 'green' : 'red'}</p> */}
                <p>Color: {this.state.color}</p>
                <button onClick={() => this.changeColor()}>Change color</button>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <div className="product-quantity">
                    {/* <button onClick={() => this.onDecrementClick()}>-</button>
                    <input type="text" value={this.state.productCount} readOnly />
                    <button onClick={()=>this.onIncrementClick()}>+</button> */}
                    <button disabled = {this.state.productCount <= 1} onClick = {() => this.onDecrementClick()} className="decrement_btn">-</button>
                    <input className = "number" type="text" value = {this.state.productCount} readOnly/>
                    <button disabled = {this.state.productCount >= 10} onClick = {() => this.onIncrementClick()} className="increment_btn">+</button>

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