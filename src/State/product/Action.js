// productActions.js
import { api } from "../../config/apiConfig";
import { API_BASE_URL } from "../../config/apiConfig";
import {
  FIND_PRODUCTS_REQUEST,
  FIND_PRODUCTS_SUCCESS,
  FIND_PRODUCTS_FAILURE,
  FIND_PRODUCT_BY_ID_REQUEST,
  FIND_PRODUCT_BY_ID_SUCCESS,
  FIND_PRODUCT_BY_ID_FAILURE,
  CREATE_PRODUCT_REQUEST,
  CREATE_PRODUCT_SUCCESS,
  CREATE_PRODUCT_FAILURE,
  DELETE_PRODUCT_REQUEST,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAILURE,
  GET_ALL_PRODUCTS_REQUEST,
  GET_ALL_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_FAILURE
} from "./ActionTypeP";

// Fetch all products with filters
export const findProducts = (reqData) => async (dispatch) => {
  console.log("Request Data before processing:", reqData);

  dispatch({ type: FIND_PRODUCTS_REQUEST });

  // Extract request data
  const {
    color,
    sizes,
    minPrice,
    maxPrice,
    minDiscount,
    category,
    stock,
    sort,
    pageNumber,
    pageSize,
  } = reqData || {};

  // ✅ Format filters correctly (especially arrays)
  // const formattedColors = color.map(c => c.toLowerCase()).join(",");
  // const size = sizes?.map(s => s.toUpperCase()).join(",");

  try {
    const { data } = await api.get(
      `/api/products?color=${color || ""}&sizes=${sizes || ""}&minPrice=${minPrice || ""}&maxPrice=${maxPrice || ""}&minDiscount=${minDiscount || ""}&category=${category || ""}&stock=${stock || ""}&sort=${sort || ""}&pageNumber=${pageNumber || 1}&pageSize=${pageSize || 10}`
    );

    console.log("Products data:", data);
    dispatch({ type: FIND_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching products:", error);
    dispatch({
      type: FIND_PRODUCTS_FAILURE,
      payload: error.message || "Failed to fetch products",
    });
  }
};


// Fetch product by ID
export const findProductById = (reqData) => async (dispatch) => {
  dispatch({ type: FIND_PRODUCT_BY_ID_REQUEST });
  const { productId } = reqData;
  console.log("productId:", productId);
  try {
    const { data } = await api.get(`/api/products/id/${productId}`);
    console.log("Product data by ID:", data);
    dispatch({ type: FIND_PRODUCT_BY_ID_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    dispatch({
      type: FIND_PRODUCT_BY_ID_FAILURE,
      payload: error.message || "Failed to fetch product",
    });
  }
};

export const createProduct = (productData) => async (dispatch) => {
  dispatch({ type: CREATE_PRODUCT_REQUEST });
  try {
    const { data } = await api.post(
      `${API_BASE_URL}/api/admin/products`,productData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("✅ Product created successfully:", data);
    dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: CREATE_PRODUCT_FAILURE,
      payload: error?.response?.data?.message || error.message,
    });
  }
};

export const deleteProduct = (productId) => async (dispatch) => {
  dispatch({ type: DELETE_PRODUCT_REQUEST });
  console.log("productId:", productId);
  try {
    await api.delete(`${API_BASE_URL}/api/admin/products/${productId}`);
    console.log("Product deleted successfully", productId);
    dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
  } catch (error) {
    dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
  }
};

export const getAllProducts = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS_REQUEST });
  try {
    const { data } = await api.get(`api/products`);
    console.log("All products data:", data);
    dispatch({ type: GET_ALL_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    console.error("Error fetching all products:", error);
    dispatch({
      type: GET_ALL_PRODUCTS_FAILURE,
      payload: error.message || "Failed to fetch all products",
    });
  }
};