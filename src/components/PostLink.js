import React from "react";
import { Link } from "gatsby";
import CategoryTag from "./CategoryTag";

export default function PostLink({ path, title, created, category, customClass }) {
    return (
        <Link to={path} className={customClass}>
            <article className="postLink">
                <p className="font-medium m-0 text-body md:text-button">{title}</p>
                <p className="m-0 text-small text-center md:text-body">
                    <CategoryTag customClass="hidden md:inline-block">{category}</CategoryTag>
                    {created}
                </p>
            </article>
        </Link>
    );
}
