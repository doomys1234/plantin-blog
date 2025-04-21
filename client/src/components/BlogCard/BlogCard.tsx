import React from "react";
import {BlogCardProps} from "../../types/blog-types.ts";
import "./BlogCard.scss";
const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readTime, image }) => {
    return (
        <div className="card_wrapper">
            <img src={image} alt={title} className="card_image" />
            <div className="p-4">
                {date && <p className="card_date">{date} • {readTime}</p>}
                <h3 className="card_title">{title}</h3>
                <p className="card_text">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
