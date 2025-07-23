import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "favorites",
    initialState: {
        favorites: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.favorites.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(el => el.id !== action.payload.id)
        },
    }
});

export default slice.reducer;
export const { addFavorite, removeFavorite } = slice.actions;