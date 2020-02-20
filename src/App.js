import React from 'react'

import './base.css'
import './cart.css'
import './header.css'
import './menu.css'
import './reset.css'

// function App() {
// 	return <h1>Hello world</h1>
// }

// const App = () => <h1>Hello world 1</h1>

const App = () => {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>
		
	)
	
}

const Footer = () => {
	return (
		<div>
			<footer className="footer">

			</footer>
		</div>
	)
}

const Main = () => {
	return (
		<div>
			<main className="main">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">

						</div>
						<div className="col-lg-9">

						</div>
					</div>
				</div>
			</main>
		</div>
	)
}

const Header = () => {
	return (
		<div>
			<header className="header">
				<div className="container">
					<div className="row">
						<div className="col-lg-3">
							<div className="logo">
								<img src="img/logo.png" alt="" />
							</div>
						</div>
						<div className="col-lg-6">
							<div className="menu">
								<ul>
									<li><a href="/">Home</a></li>
									<li><a href="/">Products</a></li>
									<li><a href="/">Payment</a></li>
									<li><a href="/">Shipping</a></li>
								</ul>
							</div>
						</div>
						<div className="col-lg-3">
							<div className="cart text-center">
								<div className="products-count">0</div>
								<div className="products-price">$500</div>
							</div>
						</div>
					</div>
				</div>
			</header>
		</div>
	)
}

export default App