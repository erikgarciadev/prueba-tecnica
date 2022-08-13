import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatus, ListResponse } from "../../interfaces/utils";

export interface PokemonsState {
    pokemons: ListResponse[]
    initialPokemons: ListResponse[]
    status: IStatus
}

const initialState : PokemonsState ={
    pokemons: [],
    initialPokemons: [],
    status: 'LOADING'
}

const pokemonsSlice = createSlice({
    name:'pokemons',
    initialState,
    reducers: {
        setStatus(state, action: PayloadAction<IStatus>){
            state.status = action.payload
        },
        setPokemons(state,action: PayloadAction<ListResponse[]>){
            state.pokemons = action.payload
        },
        setInitialPokemons(state,action: PayloadAction<ListResponse[]>){
            state.initialPokemons = action.payload
        }
    }
})

export const { setStatus, setPokemons, setInitialPokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer

