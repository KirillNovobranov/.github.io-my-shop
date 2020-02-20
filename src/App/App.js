import React from 'react'

import './../common/style/base.css'
import './../common/style/reset.css'

import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

const App = () => {
	return (
		<div>
			<Header />
			<Main />
			<Footer />
		</div>		
	)	
}

export default App