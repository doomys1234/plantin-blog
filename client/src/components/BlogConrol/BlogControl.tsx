import React from "react";
import BlogCard from "../BlogCard/BlogCard.tsx"
import {BlogControlProps, BlogCardProps} from "../../types/blog-types.ts";
import "./BlogControl.scss"

const BlogControl: React.FC<BlogControlProps> = ({ title, cards, layout }) => {
    return (
        <section className={`blog`}>
            <h2 className={`blog_title ${title==="New"? "special":""}`}>{title}</h2>
            <div className={`blog_wrapper ${layout === "grid" ? "grid-cols-3" : layout === "double" ? "grid-cols-2" : ""}`}>
                {cards.map((card:BlogCardProps) => (
                    <BlogCard key={card.id} {...card} />
                ))}
            </div>
        </section>
    );
};

export default BlogControl;
