import React from 'react'
import {Route} from 'react-router-dom'
import CartPage from './CartPage'
import PaymentPage from './PaymentPage/PaymentPage'
import ShippingPage from './ShippingPage/ShippingPage'
import ProductsList from './Products/ProductsList'

const Main = ({
    addProductToCart,
}) => {
    return (
        <div>
            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            {/* <ProductsList 
                                addProductToCart={addProductToCart}
                            /> */}
                            <Route exact path="/" render={() =>(
                                <ProductsList 
                                    addProductToCart={addProductToCart}
                                />
                            )}
                            />
                            <Route path="/cart" component={CartPage} />
                            <Route path="/payment" component={PaymentPage} />
                            <Route path="/shipping" component={ShippingPage} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main