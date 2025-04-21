import { createSlice } from "@reduxjs/toolkit";
import { BlogData } from "../types/blog-types.ts";

type BlogState = {
    data: BlogData | [];
    loading: boolean;
    error: string | null;
};

const initialState: BlogState = {
    data: [],
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        fetchBlogDataRequest: (state:BlogState) => {
            state.loading = true;
            state.error = null;
        },
        fetchBlogDataSuccess: (state:BlogState, action) => {
            state.loading = false;
            state.data = action.payload.data;
        },
        fetchBlogDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchBlogDataRequest, fetchBlogDataSuccess, fetchBlogDataFailure } = blogSlice.actions;

export default blogSlice.reducer;
