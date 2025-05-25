import {
    FIND_PRODUCTS_REQUEST,
    FIND_PRODUCTS_SUCCESS,
    FIND_PRODUCTS_FAILURE,
    FIND_PRODUCT_BY_ID_REQUEST,
    FIND_PRODUCT_BY_ID_SUCCESS,
    FIND_PRODUCT_BY_ID_FAILURE,
    DELETE_PRODUCT_SUCCESS,
    DELETE_PRODUCT_FAILURE,
    DELETE_PRODUCT_REQUEST,
    GET_ALL_PRODUCTS_REQUEST,
    GET_ALL_PRODUCTS_FAILURE,
    GET_ALL_PRODUCTS_SUCCESS

} from "./ActionTypeP"; 

  const initialState = {
    products: {
      content: [],
      currentPage: 1,
      totalPages: 1,
    },
    product: null,
    loading: false,
    error: null,

  };
  
  export const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case FIND_PRODUCTS_REQUEST:
      case FIND_PRODUCT_BY_ID_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
        case DELETE_PRODUCT_REQUEST:
          return { ...state, loading: true };

          case GET_ALL_PRODUCTS_REQUEST:
          return { ...state, loading: true };

          case GET_ALL_PRODUCTS_SUCCESS:
            return {
              ...state,
              products: action.payload,
              loading: false,
              error: null,
            };

      case FIND_PRODUCTS_SUCCESS:
        return {
          ...state,
          products: action.payload,
          loading: false,
          error: null,
        };
  
      case FIND_PRODUCT_BY_ID_SUCCESS:
        return {
          ...state,
          product: action.payload || null,
          loading: false,
          error: null,
        };
        case DELETE_PRODUCT_SUCCESS:
          return {
            ...state,
            products: {
              ...state.products,
              content: state.products.content.filter(item => item._id !== action.payload),
            },
            loading: false,
            error: null,
          };
      case FIND_PRODUCTS_FAILURE:
      case FIND_PRODUCT_BY_ID_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload || "An error occurred",
        };
        
case DELETE_PRODUCT_FAILURE:
  return { ...state, loading: false, error: action.payload };

  case GET_ALL_PRODUCTS_FAILURE:
    return { ...state, loading: false, error: action.payload };
  
      default:
        return state;
    }
  };
  