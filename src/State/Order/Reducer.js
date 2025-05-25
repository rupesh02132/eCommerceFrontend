import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAILURE,
  GET_ORDER_BY_ID_REQUEST,
  GET_ORDER_BY_ID_SUCCESS,
  GET_ORDER_BY_ID_FAILURE,
  GET_ALL_ORDERS_REQUEST,
  GET_ALL_ORDERS_SUCCESS,
  GET_ALL_ORDERS_FAILURE
} from "./ActionType";

const initialState = {
  order: null,
  orders: [],
  isLoading: false,
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        success: true,
        isLoading: false,
        order: action.payload,
        error: null,
      };
    case CREATE_ORDER_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    case GET_ORDER_BY_ID_REQUEST:
      return { ...state, error: null, isLoading: true };
    case GET_ORDER_BY_ID_SUCCESS:
      return { ...state, error: null, isLoading: false, order: action.payload };
    case GET_ORDER_BY_ID_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
        case GET_ALL_ORDERS_REQUEST:
      return { ...state, error: null, isLoading: true };

      
      case GET_ALL_ORDERS_SUCCESS:
        const ordersObject = action.payload.reduce((acc, order) => {
          acc[order._id] = order;
          return acc;
        }, {});
      
        return { ...state, error: null, isLoading: false, orders: ordersObject };
      
      case GET_ALL_ORDERS_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
