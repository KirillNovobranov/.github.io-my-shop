import React from 'react'
import './header.css'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Cart from './Cart/Cart'
import productsData from '../Main/Products/productsData'

const Header = ({
   productsInCart,
}) => {
    return (
        <div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <Logo />
                        </div>
                        <div className="col-lg-6">
                           <Menu />
                        </div>
                        <div className="col-lg-3">
                            <Cart 
                                productsInCart={productsInCart}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header