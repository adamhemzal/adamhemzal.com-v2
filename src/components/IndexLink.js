import React from "react";
import { Link } from "gatsby";
import { ArrowRight } from "../icons/ArrowRight";

export default function IndexLink({ path, customClass, children }) {
    return (
        <Link to={path} className={`group index-link ${customClass}`}>
            {children}
            <ArrowRight customClass="group-hover:animate-bounce-x index-link__icon"/>
        </Link>
    );
}
