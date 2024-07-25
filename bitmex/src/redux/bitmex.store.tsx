import { configureStore } from "@reduxjs/toolkit";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { AllBitmexSlice } from "./bitmex.slice";


const store = configureStore({
    reducer:{
        allbitmex:AllBitmexSlice.reducer
    }
});


export const useAppDispatch: ()=> typeof store.dispatch = useDispatch;
export const useAppSelector:TypedUseSelectorHook<ReturnType<typeof store.getState>>=useSelector;
export default store;