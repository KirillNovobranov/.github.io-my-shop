import React from 'react'
import ReactDOM from 'react-dom'
import App from './App/App'
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import productLikeReducer from './store/productLikeReducer'

const store = createStore(productLikeReducer)

ReactDOM.render(
    <Provider store = {store}>
        <HashRouter>
             <App /> 
        </HashRouter>
    </Provider>, document.getElementById('root'));
