import React, {useEffect, useState, useCallback} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchBlogDataRequest} from "../../store/blog/blogSlice.ts";
import SearchBanner from "../../components/SearchBanner/SearchBanner.tsx";
import {RootState, AppDispatch} from "../../store"
import useFilteredBlogData from "../../hooks/useFilterBlogData.tsx"
import BlogControl from "../../components/BlogConrol/BlogControl.tsx";

const BlogPage: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("")
    const dispatch = useDispatch<AppDispatch>();
    const { data, loading, error } = useSelector((state: RootState) => state.blog);
    const filteredData = useFilteredBlogData(data, searchQuery)

    useEffect(() => {
        dispatch(fetchBlogDataRequest());
    }, [dispatch]);

    const onSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value), []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;
    if (!data) return null;

    const layoutMap: Record<keyof typeof data, "single" | "double" | "grid"> = {
        new: "single",
        topOfTheDay: "double",
        interesting: "grid",
    };

    const sections = Object.entries(filteredData);
    return (
        <>
            <SearchBanner value={searchQuery} onChange={onSearchChange}/>
            {sections.map(([key, section]) => (
                <BlogControl
                    key={key}
                    title={section.title}
                    cards={section.cards}
                    layout={layoutMap[key as keyof typeof layoutMap]}
                />
            ))}
        </>
    )
}

export default BlogPage;
