import React from 'react'
import ProductListItem from './ProductListItem'
import productsData from './productsData'

const ProductsList = ({
    addProductToCart
}) => {
    return (
        <div>
            <h1 className="page-title"> Products List</h1>
            <div className="row">
               {
                   productsData.map(({
                       id,
                       name,
                       description,
                       type,
                       capacity,
                       price,
                       image,
                   })=>(
                       <div className="col-lg-6" key={id}>
                           <ProductListItem 
                                name={name}
                                description={description}
                                type={type}
                                capacity={capacity}
                                price={price}
                                image={image}
                                addProductToCart={addProductToCart}
                                id={id}
                            />
                       </div>
                   ))
               }
            </div>
        </div>
    )
}



export default ProductsList