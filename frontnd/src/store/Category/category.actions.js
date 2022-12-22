import axios from "axios";
import { GET_CATEGORY_DATA } from "./category.types";

export const getCategory = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:8080/category")
    dispatch({
      type: GET_CATEGORY_DATA,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};