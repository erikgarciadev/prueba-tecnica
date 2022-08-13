import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus, ListResponse } from "../../interfaces/utils";

export interface LocationsState {
    locations: ListResponse[]
    initialLocations: ListResponse[]
    status: IStatus
}

const initialState : LocationsState ={
    locations: [],
    initialLocations: [],
    status: 'LOADING'
}

const locationsSlice = createSlice({
    name:'locations',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<IStatus>){
            state.status = action.payload
        },
        setLocations(state,action: PayloadAction<ListResponse[]>){
            state.locations = action.payload
        },
        setInitialLocations(state,action: PayloadAction<ListResponse[]>){
            state.initialLocations = action.payload
        }
    }
})

export const { setStatus, setLocations, setInitialLocations } = locationsSlice.actions

export default locationsSlice.reducer

