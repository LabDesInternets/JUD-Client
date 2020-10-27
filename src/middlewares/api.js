import axios from "axios";
import { API } from "../actions/types";
import { apiEnd, apiStart, apiError } from "../actions/apiDetails";

const apiMiddleware = ({ dispatch }) => next => action => {
  next(action);

  if (action.type !== API) {
    // only apply middleware to actions of type API
    return;
  }

  const {
    url,
    method,
    data,
    onSuccess,
    onFailure,
    label,
    dataType
  } = action.payload;

  // Adds support to POST and PUT requests with data
  const dataOrParams = ["GET", "DELETE"].includes(method) ? "params" : "data";

  // axios configs
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "";
  axios.defaults.headers.common["Content-Type"] = "application/json";

  const authToken = sessionStorage.getItem("xAuth") || "";
  axios.defaults.headers.common["xAuth"] = authToken;

  if (label) {
    dispatch(apiStart(label));
  }

  axios
    .request({
      url,
      method,
      [dataOrParams]: data
    })
    .then(response => {
      dispatch(onSuccess(dataType, response.data));
      sessionStorage.setItem("xAuth", response.headers.xauth);
    })
    .catch(error => {
      console.log(error);
      // dispatch(apiError(error));
      // Original apiAction executor's error handler
      //dispatch(onFailure(error));
    })
    .finally(() => {
      if (label) {
        dispatch(apiEnd(label));
      }
    });
};

export default apiMiddleware;
