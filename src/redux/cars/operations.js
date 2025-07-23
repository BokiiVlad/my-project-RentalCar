import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://car-rental-api.goit.global/"

export const fetchCar = createAsyncThunk("car/fetchCar", async (_, thunkAPI) => {
    try {
        const res = await axios.get("/cars");
        return res.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});