import React, { Component } from 'react'
import {omit} from 'lodash'
import './../common/style/reset.css'
import './../common/style/base.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'
import CartTotal from '../Components/Cart/CartTotal'

class App extends Component {

	state = {
		productsInCart:{
			
		}
	}

	addProductToCart = (count,productId) => {
		this.setState((prevState)=>({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:(prevState.productsInCart[productId] || 0) + count
			}
		}))
	}

	removeProductFromCart = (productId) => {
		this.setState((prevState)=> ({
			productsInCart:omit(prevState.productsInCart, productId)
		}))
	}

	changeProductQuantity = (productId, quantity) => {
		this.setState((prevState) => ({
			productsInCart:{
				...prevState.productsInCart,
				[productId]:quantity
			}
		}))
	}
	
	render() {
		return (
			<div>
				<Header
					productsInCart={this.state.productsInCart}
				/>
				<Main 
					addProductToCart={this.addProductToCart}					
					productsInCart={this.state.productsInCart}
					removeProductFromCart={this.removeProductFromCart}
					changeProductQuantity={this.changeProductQuantity}					
				/>
				<Footer/>
				
			</div>
			
		)
	}
}


export default App

