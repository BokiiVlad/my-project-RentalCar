import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/"

export const fetchCar = createAsyncThunk("car/fetchCar", async (page, thunkAPI) => {
    try {
        const res = await axios.get("/cars", { params: { page } });
        return { ...res.data, page };
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});
