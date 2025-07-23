import { createSlice } from "@reduxjs/toolkit";
import { fetchCar } from "./operations.js";

const slice = createSlice({
    name: "car",
    initialState: {
        cars: [],
        error: false,
        loading: false,
        hasMore: false,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCar.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(fetchCar.fulfilled, (state, action) => {
            state.cars = action.payload;
            state.loading = false;
        }).addCase(fetchCar.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
    }
});


export default slice.reducer;