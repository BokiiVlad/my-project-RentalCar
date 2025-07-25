import { createSlice } from "@reduxjs/toolkit";
import { fetchCar } from "./operations.js";

const slice = createSlice({
    name: "car",
    initialState: {
        cars: [],
        error: false,
        loading: false,
        hasMore: false,
        totalCars: 0,
        page: 0,
        totalPages: 0,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCar.pending, (state) => {
            state.error = false;
            state.loading = true;
        }).addCase(fetchCar.fulfilled, (state, action) => {
            state.cars = action.payload.cars;
            state.totalCars = action.payload.totalCars;
            state.page = action.payload.page;
            state.totalPages = action.payload.totalPages;
            state.hasMore = action.payload.page < action.payload.totalPages;
            state.loading = false;
        }).addCase(fetchCar.rejected, (state) => {
            state.error = true;
            state.loading = false;
        })
    }
});


export default slice.reducer;