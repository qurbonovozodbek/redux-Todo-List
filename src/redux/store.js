import { combineReducers, createStore } from "redux";
import { counterReducer } from "./counterReducer";

const rootReducer = combineReducers({
  todo: counterReducer
});

export const store = createStore(rootReducer);