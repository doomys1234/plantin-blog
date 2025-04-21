import React from "react";
import BlogCard from "../BlogCard/BlogCard.tsx"
import {BlogControlProps, BlogCardProps} from "../../types/blog-types.ts";
import "./BlogControl.scss"

const BlogControl: React.FC<BlogControlProps> = ({ title, cards, layout }) => {
    const isNewSection = title === "New"
    return (
        <section className={`blog`}>
            {!isNewSection && <span className="blog_separator"></span>}
            <h2 className={`blog_title ${isNewSection? "special":""}`}>{title}</h2>
            <ul className={`blog_wrapper ${layout}`}>
                {cards.map((card:BlogCardProps) => (
                    <BlogCard key={card.id} {...card} isNew={isNewSection} />
                ))}
            </ul>
        </section>
    );
};

export default BlogControl;
