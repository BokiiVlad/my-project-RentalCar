import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "filter",
    initialState: {
        brand: null,
        price: null,
        mileageFrom: null,
        mileageTo: null
    },
    reducers: {
        addFilters: (state, action) => {
            return { ...state, ...action.payload }
        },
    }
});

export default slice.reducer;