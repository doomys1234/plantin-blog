import { createSlice } from "@reduxjs/toolkit";
import { BlogData } from "../types/blog-types.ts";

type BlogState = {
    data: BlogData | null;
    loading: boolean;
    error: string | null;
};

const initialState: BlogState = {
    data: null,
    loading: false,
    error: null,
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        fetchBlogDataRequest: (state) => {
            state.loading = true;
            state.error = null;
        },
        fetchBlogDataSuccess: (state, action) => {
            state.loading = false;
            state.data = action.payload;
        },
        fetchBlogDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchBlogDataRequest, fetchBlogDataSuccess, fetchBlogDataFailure } = blogSlice.actions;

export default blogSlice.reducer;
