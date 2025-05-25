import axios from "axios";
import { API_BASE_URL } from "../../config/apiConfig";  

 
import { REGISTER_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionType";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "./ActionType";
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS } from "./ActionType";
import { LOGOUT } from "./ActionType";

const token=localStorage.getItem("jwt");
// Register Actions
const registerRequest = () => ({ type: REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user });
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error });

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/signup`, userData);

        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user", user);
        dispatch(registerSuccess(user));
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(registerFailure(errorMessage));
    }
};

// Login Actions
const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });

export const login = (userData) => async (dispatch) => {
    dispatch(loginRequest());
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, userData);
        const user = response.data;
        if (user.jwt) {
            localStorage.setItem("jwt", user.jwt);
        }
        console.log("user", user);
        dispatch(loginSuccess(user));
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        dispatch(loginFailure(errorMessage));
    }
};

// Get User Actions
const getUserRequest = () => ({ type: GET_USER_REQUEST });
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user });
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error });

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest());
    if (!jwt) {
        console.error("No JWT token found!");
        dispatch(getUserFailure("No JWT token found"));
        return;
    }
    try {
      

        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: { "Authorization": `Bearer ${jwt}` }
        });
        const user = response.data;
        console.log("all user", user);
        dispatch(getUserSuccess(user));
    } catch (error) {
        const errorMessage = error.response?.data?.message || error.message;
        console.error("Error fetching user:", errorMessage);
        dispatch(getUserFailure(errorMessage));
    }
};

// Logout Action
export const logout = () =>  (dispatch) => {
    // localStorage.removeItem("jwt");
    dispatch({ type: LOGOUT, payload: null });
    localStorage.clear();
};
