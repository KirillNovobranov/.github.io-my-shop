import React from 'react'
import {Route} from 'react-router-dom'
import CartPage from './CartPage'
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
                            <Route exact path="/" component={ProductsList} />
                            <Route path="/cart" component={CartPage} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main