import { useMemo } from "react";
import {BlogData, BlogCard} from "../types/blog-types.ts";

const useFilteredBlogData = (blogData: BlogData | [], searchWord: string): BlogCard[] | {} => {
    return useMemo(() => {
        if (!searchWord.trim() || !blogData || Array.isArray(blogData)) {
            return blogData;
        }

        const lowerSearch = searchWord.toLowerCase();

        const filteredData = {};

        for (const [key, section] of Object.entries(blogData)) {
            const filteredCards = section.cards.filter(card =>
                card.title.toLowerCase().includes(lowerSearch) ||
                card.description.toLowerCase().includes(lowerSearch)
            );
            if (filteredCards.length > 0) {
                filteredData[key as keyof BlogData] = {
                    ...section,
                    cards: filteredCards,
                };
            }
        }

        return filteredData;
    }, [blogData, searchWord]);
};

export default useFilteredBlogData;

