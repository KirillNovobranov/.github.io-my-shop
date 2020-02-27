import React from 'react'

import ProductListItem from './ProductListItem'
import productsData from './productsData'

const ProductsList = () => {
    return (
        <div>
            <h1 className="page-title"> Products List</h1>
            <div className="row">
                {
                    productsData.map((product, i) =>(
                        <div className="col-lg-6" key={i}>
                            <ProductListItem 
                                name={product.name}
                                description={product.description}
                                type={product.type}
                                capacity={product.capacity}
                                price={product.price}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default ProductsList