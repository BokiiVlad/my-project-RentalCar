import { createSlice } from "@reduxjs/toolkit";
import { fetchCar, fetchCarById } from "./operations.js";

const slice = createSlice({
    name: "car",
    initialState: {
        cars: [],
        selectedCar: null,
        error: false,
        loading: false,
        hasMore: false,
        totalCars: 0,
        page: 1,
        totalPages: 0,
    },
    reducers: {
        incrementPage: (state) => {
            state.page += 1;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCar.pending, (state) => {
                state.error = false;
                state.loading = true;
            })
            .addCase(fetchCar.fulfilled, (state, action) => {
                const { cars, totalCars, totalPages, page } = action.payload;

                if (page === 1) {
                    state.cars = cars;
                } else {
                    state.cars = [...state.cars, ...cars];
                }

                state.totalCars = totalCars;
                state.totalPages = totalPages;
                state.hasMore = page < totalPages;
                state.loading = false;
            })
            .addCase(fetchCar.rejected, (state) => {
                state.error = true;
                state.loading = false;
            })
            .addCase(fetchCarById.pending, (state) => {
                state.loading = true;
                state.error = false;
                state.selectedCar = null;
            })
            .addCase(fetchCarById.fulfilled, (state, action) => {
                state.loading = false;
                state.selectedCar = action.payload;
            })
            .addCase(fetchCarById.rejected, (state) => {
                state.loading = false;
                state.error = true;
                state.selectedCar = null;
            });
    },
});

export const { incrementPage, clearSelectedCar } = slice.actions;
export default slice.reducer;
