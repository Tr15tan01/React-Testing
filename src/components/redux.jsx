import React from 'react'
import { cartItems } from '../redux/cart-items';
import CartContainer from '../redux/components/cartContainer';
import Navbar from '../redux/components/NavBar';
import '../redux/styles.css'
import { reducer } from '../redux/reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//reducer is a function that updates a store
//two argumennts state and action
//state - old state, before action
//action - what happened
//return updated or old store

//initial store
const initialStore = {
    count: 12,
    cart: cartItems,
    total: 105,
    amount: 24
}


const store = createStore(reducer, initialStore)

const ReduxComponent = () => {
    return (

        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    )
}

export default ReduxComponent;