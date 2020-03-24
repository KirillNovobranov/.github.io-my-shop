import React, { Component } from 'react'

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

	
	render() {
		return (
			<div>
				<Header 
					productsInCart={this.state.productsInCart}
				/>
				<Main 
					addProductToCart={this.addProductToCart}
					productsInCart={this.state.productsInCart}
				/>
				<Footer/>
				
			</div>
			
		)
	}
}


export default App

