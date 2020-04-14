import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './ProductListItem.css'
import {connect} from 'react-redux'
import Quantity from '../../../Components/Quantity/Quantity'


class ProductListItem extends Component {

    state = {
        productCount:1,
    }

    changeLikeState = () => {
        const {
            id,
            isLiked,
            addLike,
            removeLike,
        } = this.props;
        isLiked ?  removeLike(id) : addLike(id)
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
            addProductToCart,
            isLiked = false,
        } = this.props;

        return (
            <div className="product-list-item">
                <div className="product-img">
                    <img src={image} alt={description} title={name}/>
                </div>
                <button onClick={()=>this.changeLikeState()} >
                    {isLiked  ? <span>&#9829;</span> : <span>&#9825;</span> }
                </button>
                <div className="product-title">{name}</div>
                <div className="product-description">{description}</div>
                <div className="product-features">Type: {type}</div>
                <div className="product-features">Capacity: {capacity} Gb</div>
                <Quantity 
                    productCount={this.state.productCount}
                    onIncrementClick={this.onIncrementClick}
                    onDecrementClick={this.onDecrementClick}
                    minCount={1}
                />
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

const mapStateToProps = (state, props) => ({
    isLiked:state[props.id],
})

const mapDispatchToProps = (dispatch) => ({
    addLike:(id) => dispatch ({
        type:"LIKE",
        id:id,
    }),
    removeLike:(id) => dispatch ({
        type:"DISLIKE",
        id:id,
    })    
})

export default connect(
    mapStateToProps,
    mapDispatchToProps

) (ProductListItem)
