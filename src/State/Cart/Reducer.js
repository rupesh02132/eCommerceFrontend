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

const initialState = {
  cart: [],
  isLoading: false,
  error: null,
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_ITEM_TO_CART_SUCCESS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload.cartItems],
        isLoading: false,
      };
    case ADD_ITEM_TO_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    case GET_CART_SUCCESS:
      return {
        ...state,
        cartItems: action.payload.cartItems,
        cart: action.payload,
        isLoading: false,
      };
    case GET_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case REMOVE_ITEM_FROM_CART_REQUEST:
    case UPDATE_ITEM_IN_CART_REQUEST:
      return { ...state, isLoading: true, error: null };
    case REMOVE_ITEM_FROM_CART_SUCCESS:
      return {
        ...state,
        deleteCartItem:action.payload,
      };
    case UPDATE_ITEM_IN_CART_SUCCESS:
      return {
        ...state,
        updateCartItem:action.payload,
        isLoading: false,
      };
    case REMOVE_ITEM_FROM_CART_FAILURE:
    case UPDATE_ITEM_IN_CART_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
