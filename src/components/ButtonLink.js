import React from "react";
import { Link } from "gatsby";

export default function ButtonLink({ path, customClass, children }) {
    return (
        <Link to={path} className={`button ${customClass}`}>
            {children}
        </Link>
    );
}
