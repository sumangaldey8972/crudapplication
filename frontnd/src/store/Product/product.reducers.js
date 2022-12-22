import {
  DELETE_PRODUCT_DATA,
  EDIT_PRODUCT_DATA,
  GET_PRODUCT_DATA,
  POST_PRODUCT_DATA,
} from "./product.types";

const initState = {
  data: [],
};

export const productReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT_DATA: {
      return {
        ...state,
        data: payload,
      };
    }
    case POST_PRODUCT_DATA: {
      return {
        ...state,
        data: [...state.data, payload],
      };
    }
    case EDIT_PRODUCT_DATA: {
      let newProduct = state.data.map((el) => {
        if (el._id === payload.id) {
          return payload.data;
        } else {
          return el;
        }
      });
      return {
        ...state,
        data: newProduct,
      };
    }
    case DELETE_PRODUCT_DATA: {
      let newData = state.data.filter((el) => el.id !== payload.id);
      return {
        ...state,
        data: newData,
      };
    }
    default: {
      return state;
    }
  }
};
