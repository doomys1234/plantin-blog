import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import blogReducer from "./blogSlice";
import { blogWatcherSaga } from "./blogSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        blog: blogReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(blogWatcherSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
