import { Component } from 'react'

import React from 'react'

import './../common/style/base.css'
import './../common/style/reset.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

class App extends Component {

	state = {
		productsInCart: {
			1:5,
			2:5,
		}
	}

	addProductToCart = (count, productId) => {
		this.setState((prevState) => ({
			productsInCart:{
				...prevState.productsInCart,
				[productId]: (prevState.productsInCart[productId] || 0) + count
			}
			
		})
		)
	}

	render() {
		return (
			<div>
				<Header 
					productsInCart={this.state.productsInCart}
				/>
				<Main 
					addProductToCart = {this.addProductToCart}
				/>
				<Footer />
			</div>
		)
	}
}

export default App