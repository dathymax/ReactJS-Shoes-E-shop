import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import rootReducer from "./rootReducers";

export const store = configureStore({
    reducer: rootReducer,
});
export const useAppDispatch = useDispatch;
export const useAppSelector = useSelector;