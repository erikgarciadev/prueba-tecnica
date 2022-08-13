import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus, ListResponse } from "../../interfaces/utils";

export interface ItemsState {
    items: ListResponse[]
    initialItems: ListResponse[]
    status: IStatus
}

const initialState : ItemsState ={
    items: [],
    initialItems: [],
    status: 'LOADING'
}

const itemsSlice = createSlice({
    name:'items',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<IStatus>){
            state.status = action.payload
        },
        setItems(state,action: PayloadAction<ListResponse[]>){
            state.items = action.payload
        },
        setInitialItems(state,action: PayloadAction<ListResponse[]>){
            state.initialItems = action.payload
        }
    }
})

export const { setStatus, setItems, setInitialItems } = itemsSlice.actions

export default itemsSlice.reducer

