import { configureStore } from "@reduxjs/toolkit";
import carReducer from "./cars/carsSlice.js"
import filterReduser from "./filters/filtersSlice.js"
import favoritesReduser from "./favorites/favoritesSlice.js"

export const store = configureStore({
    reducer: {
        cars: carReducer,
        filters: filterReduser,
        favorites: favoritesReduser
    }
});