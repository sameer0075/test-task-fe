import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import issueSlice from "./slices/issue-slice";

export const rootReducer = combineReducers({
	issues: issueSlice,
});

export const store = configureStore({
	reducer: rootReducer,
});
