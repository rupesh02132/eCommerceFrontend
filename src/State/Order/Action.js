
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
import { api } from "../../config/apiConfig";
export const createOrder = (reqData) => async (dispatch) => {
  dispatch({ type: CREATE_ORDER_REQUEST });

  try {

    const { data } = await api.post(`/api/orders`, reqData.address);

    const orderId = data._id||data.id;

    if (orderId && reqData.navigate) {
      reqData.navigate({ search: `step=3&order_Id=${orderId}` });
    }

    console.log("Order created:", data);

    dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });

  } catch (error) {
    console.error("Order creation failed:", error);

    dispatch({
      type: CREATE_ORDER_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
  }
};


export const getOrderById = (orderId) => async (dispatch) => {
  
  dispatch({ type: GET_ORDER_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`/api/orders/${orderId}`);
    console.log("get order by id", data);
    dispatch({ type: GET_ORDER_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ORDER_BY_ID_FAILURE, payload: error.message });
  }
};

export const getAllOrders = () => async (dispatch) => {
  dispatch({ type: GET_ALL_ORDERS_REQUEST });
  try {
    const { data } = await api.get(`/api/admin/orders`);
    console.log("all orders data", data);
    dispatch({ type: GET_ALL_ORDERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_ALL_ORDERS_FAILURE, payload: error.message });
  }
};