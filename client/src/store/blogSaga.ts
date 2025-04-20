import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
    fetchBlogDataRequest,
    fetchBlogDataSuccess,
    fetchBlogDataFailure,
} from "./blogSlice";
import { BlogData } from "../types/blog-types";

function fetchBlogApi() {
    return axios.get<BlogData>("/api/blog");
}

function* fetchBlogSaga() {
    try {
        const response:AxiosResponse<BlogData> = yield call(fetchBlogApi);
        yield put(fetchBlogDataSuccess(response.data));
    } catch (error: any) {
        yield put(fetchBlogDataFailure(error.message || "Failed to load blog data"));
    }
}

export function* blogWatcherSaga() {
    yield takeLatest(fetchBlogDataRequest.type, fetchBlogSaga);
}
