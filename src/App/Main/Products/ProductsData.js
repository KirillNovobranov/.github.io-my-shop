// import productsData from './../Products/productsData'

import { array } from "prop-types"

const productsData = [
    {
        id:1,
        name:"iPhone X",
        description:"This is iPhone X",
        type:"phone",
        capacity:64,
        price:500,
        image:"/images/ipad.png",
    },
    { 
        id:2,
        name:"iPhone XS",
        // description:"This is iPhone XS",
        type:"phone",
        capacity:64,
        price:1000,
        image:"/images/iphone.png"
    },
    {
        id:3,
        name:"iPhone 7",
        description:"This is iPhone 7",
        type:"phone",
        capacity:256,
        price:1000,
        image:"/images/iphone.png",
    },
    {
        id:4,
        name:"iPhone 8",
        description:"This is iPhone 8",
        type:"phone",
        capacity:128,
        price:1500,
        image:"/images/ipad.png",
    },
    
]

export const getProductsMap = (array) => {
    return array.reduce((accObj,product)=>({
        ...accObj,
        [product.id]:product,
    }),{})
}

export default productsData