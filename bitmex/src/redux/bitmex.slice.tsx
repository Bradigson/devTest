import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBitmex } from "../services/interfaces/bitmex.interfaces";

interface AllBitmexData {
    data:IBitmex[];
    dataFromDataBase:IBitmex[];
    show:boolean;
    showDataBase:boolean,
    showWebSocket:boolean,
    websocket:any[];
}


const initialState : AllBitmexData = {
    data:[],
    show:false,
    dataFromDataBase:[],
    showDataBase:false,
    showWebSocket:false,
    websocket:[]
}

export const AllBitmexSlice = createSlice({
    name:'AllBitmexData',
    initialState, 
    reducers:{
        add:(state, action:PayloadAction<IBitmex[]>)=>{
            state.data = action.payload;
        },
        handleModal:(state, action:PayloadAction<boolean>)=>{
            state.show = action.payload;
        }, 
        addFromDataBase:(state, action:PayloadAction<IBitmex[]>)=>{
            //state.dataFromDataBase.push(...action.payload);
            state.dataFromDataBase = action.payload;
        },
        handleShowDataBase:(state, action:PayloadAction<boolean>)=>{
            state.showDataBase = action.payload;
        },
        handleShowWebSocket:(state, action:PayloadAction<boolean>)=>{
            state.showWebSocket = action.payload;
        },
        handleInsertWebSocket:(state, action:PayloadAction<any>)=>{
            state.websocket.push(...action.payload);
        }
    }
})


export const {add, handleModal, addFromDataBase, handleShowDataBase, handleShowWebSocket, handleInsertWebSocket} = AllBitmexSlice.actions;
export default AllBitmexSlice.reducer;