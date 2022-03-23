import React from "react";
import { Link } from "gatsby";
import CategoryTag from "./CategoryTag";

export default function PostLink({ path, title, created, category }) {
    return (
        <Link to={path}>
            <article className={`flex justify-between border border-colorWhite py-5 px-6 my-6 shadow-md rounded transition hover:border-colorOrange`}>
                <p className="font-medium m-0">{title}</p>
                <p className="m-0">
                    <CategoryTag>{category}</CategoryTag>
                    {created}
                </p>
            </article>
        </Link>
    );
}
