import { combineReducers } from "@reduxjs/toolkit";
import { RouteSliceReducer } from "../Slices/RouteSlice";

const rootReducer = combineReducers({
    route:RouteSliceReducer
});

export default rootReducer