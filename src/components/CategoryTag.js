import React from "react";
import { Link } from "gatsby";

export default function CategoryTag({ children, customClass }) {
    return (
        <span className={`category-tag ${customClass}`}>
            {children}
        </span>
    );
}
