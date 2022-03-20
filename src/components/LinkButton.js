import React from "react";
import { Link } from "gatsby";

export default function LinkButton({ path, children }) {
    return (
        <Link to={path} className="">
            {children}
        </Link>
    );
}
