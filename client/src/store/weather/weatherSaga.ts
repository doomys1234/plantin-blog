import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
    fetchWeatherRequest,
    fetchWeatherSuccess,
    fetchWeatherFailure,
} from "./weatherSlice";

function fetchWeatherApi() {
    return axios.get<any>("https://plantin-blog-server.onrender.com/blog");
}

function* fetchWeatherSaga() {
    try {
        const response:AxiosResponse<any> = yield call(fetchWeatherApi);
        yield put(fetchWeatherSuccess(response.data));
    } catch (error: any) {
        yield put(fetchWeatherFailure(error.message || "Failed to load blog data"));
    }
}

export function* weatherWatcherSaga() {
    yield takeLatest(fetchWeatherRequest.type, fetchWeatherSaga);
}
