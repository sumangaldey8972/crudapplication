import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { categoryReducer } from "./Category/category.reducers";
import { productReducer } from "./Product/product.reducers";

const rootReducer = combineReducers({
  category: categoryReducer,
  product: productReducer
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
