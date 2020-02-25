import React from 'react'

import ProductsList from './Products/ProductsList'

const Main = () => {
    return (
        <div>
            <main className="main">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            Filter
                        </div>
                        <div className="col-lg-9">
                            <ProductsList />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Main