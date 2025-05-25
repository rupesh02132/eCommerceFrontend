import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { productReducer } from "./product/Reducer";
import { cartReducer } from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import  paymentReducer  from "./Payment/Reducer";
import  adminOrderReducer  from "./Admin/Order/Reducer";



// Combine reducers
const rootReducer = combineReducers({
  auth: authReducer,
  productS:productReducer,
  cart:cartReducer,
  order:orderReducer,
  payment:paymentReducer,
  adminOrder:adminOrderReducer


});

// Create store with middleware
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export default store;
