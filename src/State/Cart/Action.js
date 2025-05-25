import {
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  REMOVE_ITEM_FROM_CART_REQUEST,
  REMOVE_ITEM_FROM_CART_SUCCESS,
  REMOVE_ITEM_FROM_CART_FAILURE,
  UPDATE_ITEM_IN_CART_REQUEST,
  UPDATE_ITEM_IN_CART_SUCCESS,
  UPDATE_ITEM_IN_CART_FAILURE,
} from "./ActionType";

import { api } from "../../config/apiConfig";
export const getCart = (reqData) => async (dispatch) => {
  dispatch({ type: GET_CART_REQUEST });

  try {
    const { data } = await api.get(`/api/carts`);
 dispatch({ type: GET_CART_SUCCESS, payload: data });
    console.log("cart data",data);
  } catch (error) {
    dispatch({ type: GET_CART_FAILURE, payload: error.message });
  }
};

// export const addItemToCart = (reqData) => async (dispatch) => {
//   dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
// try {
//     const { data } = await api.put(`/api/carts/add`, reqData);
//     dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
//     console.log("add item to cart", data);
   
//   } catch (error) {
//     dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message });
//   }
// };

export const addItemToCart = (reqData) => async (dispatch) => {
  dispatch({ type: ADD_ITEM_TO_CART_REQUEST });
  try {
    console.log("Sending request to add to cart", reqData);
    const { data } = await api.put(`/api/carts/add`, reqData);
    dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data });
    console.log("add item to cart", data);
  } catch (error) {
    console.log("Error adding to cart", error);
    dispatch({
      type: ADD_ITEM_TO_CART_FAILURE,
      payload: error.response?.data?.message || error.message,
    });
  }
};
export const removeItemFromCart = (cartItemId) => async (dispatch) => {
  dispatch({ type: REMOVE_ITEM_FROM_CART_REQUEST });

  try {
    const { data } = await api.delete(`/api/cart_items/${cartItemId}`);

    dispatch({ type: REMOVE_ITEM_FROM_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: REMOVE_ITEM_FROM_CART_FAILURE, payload: error.message });
  }
};

export const updateItemInCart = (reqData) => async (dispatch) => {
  dispatch({ type: UPDATE_ITEM_IN_CART_REQUEST });

  try {
    const { data } = await api.put(`/api/cart_items/${reqData.cartItemId}`,
      reqData.data
    );

    dispatch({ type: UPDATE_ITEM_IN_CART_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: UPDATE_ITEM_IN_CART_FAILURE, payload: error.message });
  }
};
