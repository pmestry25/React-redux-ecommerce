import {ADD_ITEMS_TO_CART, GET_CART_ITEMS_COUNT, DECREASE_ITEM_QUANTITTY, REMOVE_ITEMS_FROM_CART} from '../constants/AppConstants';

export const addToCartAction = (productId) => {
    // return (dispatch) => {
    //     console.log("Add");
    //     console.log("pd:" + productId);
    //     dispatch({
    //         type: ADD_ITEMS_TO_CART,
    //         payload: productId
    //     })
    // }       
    return {
        type: ADD_ITEMS_TO_CART,
        payload: productId
    };
}

export const getCartItemsCount = () => {
    return (dispatch) => {
        console.log("get count");
        dispatch({
            type: GET_CART_ITEMS_COUNT
        })
    }       
}

export const decreaseQuantityAction = (productId) => {
    return {
        type: DECREASE_ITEM_QUANTITTY,
        payload: productId
    };
}

export const removeFromCartAction = (productId) => {
    return {
        type: REMOVE_ITEMS_FROM_CART,
        payload: productId
    };
}