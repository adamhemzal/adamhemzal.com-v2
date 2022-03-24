import React from "react";

export default function CategoryTag({ children, customClass }) {
    return (
        <span className={`category-tag ${customClass}`}>
            {children}
        </span>
    );
}
