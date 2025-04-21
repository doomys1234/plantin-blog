import {blogWatcherSaga} from "./blog/blogSaga.ts";
import {weatherWatcherSaga} from "./weather/weatherSaga.ts";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
    yield all([
        blogWatcherSaga(),
        weatherWatcherSaga(),
    ]);
}
