import { Component } from 'react'

import React from 'react'

import './../common/style/base.css'
import './../common/style/reset.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

	state = {
		// cartData: {
		// 	count:0,
		// 	price:0,
		// }
		productsInCart: {
			1:5,
			2:5,
		}
	}

	addProductToCart = (count, productId) => {

		this.setState((prevState) => ({
			productsInCart: {
				[productId]: prevState.productsInCart[productId] + count
			}
		}))
	}

	render() {
		return (
			
			<div>
				<Header 
					productsInCart={this.state.productsInCart}
				/>
				<button onClick={()=>this.addProductToCart(1,2)}>Add to cart</button>
				<Main 
					addProductToCart = {this.addProductToCart}
				/>
				<Footer />
			</div>
		)
	}
}

export default App