import { configureStore } from "@reduxjs/toolkit";
import pokemonsReducer from "../features/pokemons/pokemonSlice";
import locationsReducer from '../features/locations/locationsSlice'
import itemsReducer from '../features/items/itemsSlice'

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    locations: locationsReducer,
    items: itemsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
