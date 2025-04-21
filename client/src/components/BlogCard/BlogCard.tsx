import React from "react";
import {BlogCard as BlogCardProps} from "../../types/blog-types.ts";
import "./BlogCard.scss";
const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readTime, image, isNew }) => {
    return (
        <li className={`card_wrapper ${isNew ? "special" : ""}`}>
            <img src={image} alt={title} className={`card_image ${isNew ? "special" : ""}`} />
            <div className={`card_text-wrapper ${isNew ? "special" : ""}`}>
                {date && <p className={`card_date ${isNew ? "special" : ""}`}>{date} • {readTime}</p>}
                <h3 className={`card_title ${isNew ? "special" : ""}`}>{title}</h3>
                <p className="card_text">{description}</p>
            </div>
        </li>
    );
};

export default BlogCard;
