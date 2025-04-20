import React from "react";
import {BlogCardProps} from "../../types/blog-types.ts";

const BlogCard: React.FC<BlogCardProps> = ({ title, description, date, readTime, image, isNew }) => {
    return (
        <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
            {isNew && <span className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">New</span>}
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="p-4">
                {date && <p className="text-gray-400 text-sm">{date} • {readTime}</p>}
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    );
};

export default BlogCard;
