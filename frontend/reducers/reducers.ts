import { loginReducer } from "./loginReducer";
import { combineReducers } from "redux";

const reducers = {
	login: loginReducer,
};

export default combineReducers(reducers);
