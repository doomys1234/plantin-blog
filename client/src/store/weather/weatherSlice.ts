import { createSlice } from "@reduxjs/toolkit";

type WeatherState = {
    temperature: number | [];
    loading: boolean;
    error: string | null;
};

const initialState: WeatherState = {
    temperature: [],
    loading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: "weather",
    initialState,
    reducers: {
        fetchWeatherRequest: (state:WeatherState) => {
            state.loading = true;
            state.error = null;
        },
        fetchWeatherSuccess: (state:WeatherState, action) => {
            state.loading = false;
            state.temperature = action.payload.data.main.temp;
        },
        fetchWeatherFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchWeatherRequest, fetchWeatherSuccess, fetchWeatherFailure } = weatherSlice.actions;

export default weatherSlice.reducer;
