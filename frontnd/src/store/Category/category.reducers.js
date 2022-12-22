import { GET_CATEGORY_DATA } from "./category.types";

const initState = {
  data: [],
};

export const categoryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_CATEGORY_DATA: {
      return {
        ...state,
        data: payload,
      };
    }
    default: {
      return state;
    }
  }
};
