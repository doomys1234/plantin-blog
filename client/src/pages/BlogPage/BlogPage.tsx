import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchBlogDataRequest} from "../../store/blogSlice.ts";
import SearchBanner from "../../components/SearchBanner/SearchBanner.tsx";
import {RootState, AppDispatch} from "../../store"
import "./BlogPage.scss"
const BlogPage: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.blog);

    useEffect(() => {
        dispatch(fetchBlogDataRequest());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="text-red-500">{error}</p>;
    if (!data) return null;
    console.log('data', data)
    return (
        <>
            <SearchBanner/>
        </>
    )
}

export default BlogPage;
