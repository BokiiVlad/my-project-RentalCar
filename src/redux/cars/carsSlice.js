import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "car",
    initialState: {
        cars: [],
        error: null,
        loading: false,
        hasMore: false,
    },
    reducers: {
        addCar: (state, action) => {
            state.cars = [...state.cars, ...action.payload];
        },
    }
});


export default slice.reducer;
export const { addCar } = slice.actions;