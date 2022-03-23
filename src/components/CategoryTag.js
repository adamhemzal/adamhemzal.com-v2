import React from "react";
import { Link } from "gatsby";

export default function CategoryTag({ children }) {
    return (
        <span className="py-1 px-5 mx-4 rounded-2xl text-small bg-colorOrangeLight">
            {children}
        </span>
    );
}
