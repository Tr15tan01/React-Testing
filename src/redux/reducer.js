import { actions } from "./actions";

export const reducer = (state, action) => {
    console.log({ state, action })
    switch (action.type) {
        case actions.INCREASE:
            console.log(';increase', action.payload)
            const newCart = state.cart.map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount + 1 }
                }
                return cartItem
            })
            return {
                ...state,
                cart: newCart
            }
        case actions.CLEAR_CART: {
            console.log('cleared...')
            return {
                ...state,
                cart: []
            }
        }
        case actions.DECREASE:
            console.log('I know it s a bug, that goes beyond zero', action.payload)
            const reducedCart = state.cart.map(cartItem => {
                if (cartItem.id === action.payload.id) {
                    cartItem = { ...cartItem, amount: cartItem.amount - 1 }
                }
                return cartItem
            })
            return {
                ...state,
                cart: reducedCart
            }
        case actions.REMOVE_ITEM: {
            console.log('removed...')
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload.id)
            }
        }
        case actions.GET_TOTALS: {
            console.log('toatals calculated')
            return state;
            //when put break here it crashed everything
        }
        default:
            return state;
    }
}