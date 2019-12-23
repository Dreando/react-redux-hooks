import {combineReducers} from "redux";
import {countReducer} from "./countReducer";
import {postsReducer} from "./postsReducer";

export const rootReducer = combineReducers({
  countState: countReducer,
  postsState: postsReducer
});