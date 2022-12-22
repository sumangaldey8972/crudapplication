import axios from "axios";
import {
  DELETE_PRODUCT_DATA,
  EDIT_PRODUCT_DATA,
  GET_PRODUCT_DATA,
  POST_PRODUCT_DATA,
} from "./product.types";

export const getProduct = () => async (dispatch) => {
  try {
    let res = await axios.get("http://localhost:8080/product");
    console.log("products res", res);
    dispatch({
      type: GET_PRODUCT_DATA,
      payload: res.data.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postProducts = (creds) => async (dispatch) => {
  try {
    let res = await axios.post("http://localhost:8080/product", creds);
    console.log("post res", res);
    dispatch({
      type: POST_PRODUCT_DATA,
      payload: creds,
    });
  } catch (err) {
    console.log(err);
  }
};

export const editProducts = (id, creds) => async (dispatch) => {
  try {
    let res = await axios.put(`http://localhost:8080/product/${id}`, creds);
    console.log("edit res", res);
    dispatch({
      type: EDIT_PRODUCT_DATA,
      payload: { id: id, data: creds },
    });
  } catch (err) {
    console.log(err);
  }
};

export const deleteProduct = (id) => async (dispatch) => {
  try {
    let res = await axios.delete(`http://localhost:8080/product/${id}`);
    console.log("delete res", res);
    dispatch({
      type: DELETE_PRODUCT_DATA,
      payload: { id: id },
    });
  } catch (err) {
    console.log(err);
  }
};
