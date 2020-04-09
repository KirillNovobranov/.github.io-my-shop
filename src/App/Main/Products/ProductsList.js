import React from 'react'
import ProductListItem from './ProductListItem'
import productsData from './productsData'

const ProductsList = ({
    addProductToCart,
    likeButtonsState,
    addLike,
    removeLike,
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
                                isLiked={likeButtonsState[id]}
                                addLike={addLike}
                                removeLike={removeLike}
                            />
                       </div>
                   ))
               }
            </div>
        </div>
    )
}



export default ProductsList