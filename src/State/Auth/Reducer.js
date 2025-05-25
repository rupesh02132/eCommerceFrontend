import { GET_USER_SUCCESS, LOGOUT } from "./ActionType";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";   
import { GET_USER_FAILURE, GET_USER_REQUEST } from "./ActionType";


const initialState = {
    user: null,
    isLoading: false,
    error: null,
    jwt: null,
    // jwt: localStorage.getItem("jwt") || null,

};
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            }

            case REGISTER_SUCCESS:
            case LOGIN_SUCCESS:
             return {
                        ...state,
                        jwt: action.payload,
                        isLoading: false,
                        error: null,
                    }
            case GET_USER_SUCCESS:
                    return {
                        ...state,
                        user: action.payload,
                        isLoading: false,
                        error: null,
                        user: action.payload
                    }
            case REGISTER_FAILURE:
            case LOGIN_FAILURE:
            case GET_USER_FAILURE:
                    return {
                        ...state,
                        isLoading: false,
                        error: action.payload,
                    }
                // case LOGOUT:
                //     return {
                //       ...initialState
                //     }

                case LOGOUT:
//   localStorage.removeItem("jwt"); 
  return {
    ...initialState
  };

            default:
            return state;
    }
};