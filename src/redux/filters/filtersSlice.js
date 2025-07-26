import { createSlice } from "@reduxjs/toolkit";
import { fetchBrand } from "./operations.js";

const slice = createSlice({
    name: "filter",
    initialState: {
        brands: [],
        brand: "",
        rentalPrice: "",
        minMileage: "",
        maxMileage: ""
    },
    reducers: {
        addFilters: (state, action) => {
            return { ...state, ...action.payload }
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBrand.fulfilled, (state, action) => {
                state.brands = action.payload;

            })
    }
});
export default slice.reducer;
export const { addFilters } = slice.actions;