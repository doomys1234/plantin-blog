import React from "react";
import BlogCard from "../BlogCard/BlogCard.tsx"
import {BlogControlProps, BlogCardProps} from "../../types/blog-types.ts";

const BlogControl: React.FC<BlogControlProps> = ({ title, cards, layout }) => {
    return (
        <section className={`my-6 ${layout}`}>
            <h2 className="text-xl font-bold mb-4">{title}</h2>
            <div className={`grid gap-4 ${layout === "grid" ? "grid-cols-3" : layout === "double" ? "grid-cols-2" : ""}`}>
                {cards.map((card:BlogCardProps) => (
                    <BlogCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
};

export default BlogControl;
