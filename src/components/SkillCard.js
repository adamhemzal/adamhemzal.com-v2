import React from "react";
import { AdobeIcon } from "../icons/AdobeIcon";

export default function SkillCard({ name, icon, link, customClass }) {
    // Load dynamically icons
    let selectedIcon;
    switch(icon) {
        case "adobe": 
            selectedIcon = <AdobeIcon customClass="image-svg"/>;
            break;
        default: 
            selectedIcon = <p>No icon</p>;
    }

    return (
        <a href={link} rel="noopener noreferrer" target="_blank" className={`skill-card ${customClass}`}>
            {selectedIcon}
            <p className="font-medium text-small mt-2 mb-2">{name}</p>
        </a>
    );
}
