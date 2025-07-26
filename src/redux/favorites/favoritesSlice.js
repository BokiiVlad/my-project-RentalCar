import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "favorites",
    initialState: {
        items: []
    },
    reducers: {
        addFavorite: (state, action) => {
            state.items.push(action.payload)
        },
        removeFavorite: (state, action) => {
            state.items = state.items.filter(el => el !== action.payload)
        },
    }
});

export default slice.reducer;
export const { addFavorite, removeFavorite } = slice.actions;