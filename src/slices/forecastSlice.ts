import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import DailyWeatherForecast from '../types/dailyWeatherForecast';
import { RootState } from '../store/store';


interface ForecastState {
    weeklyForecast: DailyWeatherForecast[]
}

const initialState : ForecastState = {
    weeklyForecast: []
};

export const forecastSlice = createSlice({
    name: "forecast", 
    initialState,
    reducers: {
        update: (state, action : PayloadAction<DailyWeatherForecast[]>) => {
            state.weeklyForecast = action.payload;
        }
    }
});  

export const { update } = forecastSlice.actions;

export const selectWeeklyForecast = (state : RootState) => state.forecast.weeklyForecast;

export default forecastSlice.reducer;