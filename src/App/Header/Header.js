import React from 'react'
import './header.css'
import Menu from './Menu/Menu'
import Logo from './Logo/Logo'
import Cart from './Cart/Cart'

const Header = ({
    cartData,
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
                                count={cartData.count}
                                price={cartData.price}
                            />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header