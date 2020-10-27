import * as types from "./types";
import axios from "axios";
import { push } from "connected-react-router";

const apiBaseUrl = process.env.REACT_APP_BASE_URL;
const urlSignup = `${apiBaseUrl}/users/register`;

export const logOut = () => async dispatch => {
  sessionStorage.removeItem("xAuth");
  dispatch({
    type: types.LOGOUT
  });
  dispatch(push("/"));
};

export const signUp = newUser => async dispatch => {
  try {
    const response = await axios.post(urlSignup, newUser);
    const userInfo = response.data.userInfo;
    dispatch({
      type: types.SIGNUP_REQUEST
    });
    dispatch({
      type: types.SIGNUP_SUCCESS,
      payload: userInfo
    });
    dispatch(push("/boutique"));
  } catch (error) {
    console.log(error);
  }
};
