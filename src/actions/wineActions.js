
import { FETCH_WINE_DETAILS } from "./types";
import axios from "axios";



const apiBaseUrl = process.env.REACT_APP_BASE_API;
const UrlWines = `${apiBaseUrl}/api/wines`;


// export const fetchWineDetails = wineId => async dispatch => {
//   const res = await axios.get(`${UrlWines}/${wineId}`);
//   dispatch({
//     type: FETCH_WINE_DETAILS,
//     payload: res.data
//   });
// };
