import {
    GET_ALL_ORDERS_REQUEST,
    GET_ALL_ORDERS_SUCCESS,
    GET_ALL_ORDERS_FAILURE,
    CONFIRMED_ORDER_REQUEST,
    CONFIRMED_ORDER_SUCCESS,
    CONFIRMED_ORDER_FAILURE,
    DELETE_ORDER_REQUEST,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
    DELIVERED_ORDER_REQUEST,
    DELIVERED_ORDER_SUCCESS,
    DELIVERED_ORDER_FAILURE,
    CANCELLED_ORDER_REQUEST,
    CANCELLED_ORDER_SUCCESS,
    CANCELLED_ORDER_FAILURE,
    SHIPED_ORDER_REQUEST,
    SHIPED_ORDER_SUCCESS,
    SHIPED_ORDER_FAILURE,
   
  } from "./ActionType";
  
  const initialState = {
    loading: false,
    orders: [],
    error: null,
    message: null
  };
  
  const adminOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_ALL_ORDERS_REQUEST:
      case CONFIRMED_ORDER_REQUEST:
      case DELETE_ORDER_REQUEST:
      case DELIVERED_ORDER_REQUEST:
      case CANCELLED_ORDER_REQUEST:
      case SHIPED_ORDER_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
          message: null
        };
  
      case GET_ALL_ORDERS_SUCCESS:
        return {
          ...state,
          loading: false,
          orders: action.payload,
          error: null
        };
  
      case CONFIRMED_ORDER_SUCCESS:{
        return {
          ...state,
          loading: false,
          message: action.payload,
          error: null,
          confirmedOrder:action.payload
        };
      }
      
      case DELIVERED_ORDER_SUCCESS:{
        return {
          ...state,
          loading: false,
          message: action.payload,
          error: null,
          deliveredOrder:action.payload
        };
      }
      case CANCELLED_ORDER_SUCCESS:
      
        return {
          ...state,
          loading: false,
          message: action.payload,
          error: null,
          cancelledOrder:action.payload
        };
        case DELETE_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          message: action.payload,
          error: null,
          deleteOrder:action.payload,
        }
        case SHIPED_ORDER_SUCCESS:
        return {
          ...state,
          loading: false,
          shipped: action.payload,
         
        }
      case GET_ALL_ORDERS_FAILURE:
      case CONFIRMED_ORDER_FAILURE:
      case DELETE_ORDER_FAILURE:
      case DELIVERED_ORDER_FAILURE:
      case CANCELLED_ORDER_FAILURE:
      case SHIPED_ORDER_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default adminOrderReducer;
  