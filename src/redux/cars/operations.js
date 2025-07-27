import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/";

export const fetchCar = createAsyncThunk(
    "car/fetchCar",
    async ({ page, filter }, thunkAPI) => {
        try {
            const res = await axios.get("/cars", {
                params: {
                    page,
                    brand: filter.brand || undefined,
                    rentalPrice: filter.rentalPrice || undefined,
                    minMileage: filter.minMileage || undefined,
                    maxMileage: filter.maxMileage || undefined,
                },
            });
            return { ...res.data, page };
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);



export const fetchCarById = createAsyncThunk(
    "car/fetchCarById",
    async (id, thunkAPI) => {
        try {
            const response = await axios.get(`/cars/${id}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
