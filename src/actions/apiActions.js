import * as types from "./types";

function apiAction({
  url,
  method = "GET", // Default method
  data = null,
  onSuccess = () => { },
  onFailure = () => { },
  label,
  dataType
}) {
  return {
    type: types.API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      dataType
    }
  };
}

export const fetchData = (dataType, url, method, data) => {
  return apiAction({
    url,
    method,
    data,
    onSuccess: setData,
    onFailure: error => console.log("Error while loading data", error), // Dummy error handler.
    label: types.FETCH_DATA,
    dataType
  });
};

export const setData = (dataType, data) => {
  return {
    type: `SET_${dataType}`,
    payload: data
  };
};
