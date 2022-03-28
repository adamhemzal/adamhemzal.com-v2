import React from "react";
import { Link } from "gatsby";
import CategoryTag from "./CategoryTag";

export default function PostLink({ path, title, created, category, customClass }) {
    return (
        <Link to={path} className={customClass}>
            <article className="postLink">
                <p className="title">{title}</p>
                <p className="cat-date">
                    <CategoryTag customClass="hidden md:inline-block">{category}</CategoryTag>
                    {created}
                </p>
            </article>
        </Link>
    );
}
