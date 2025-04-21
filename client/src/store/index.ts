import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import blogReducer from "./blog/blogSlice.ts";
import weatherReducer from "./weather/weatherSlice.ts";
import rootSaga from "./rootSaga.ts";
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        blog: blogReducer,
        weather: weatherReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga );

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
