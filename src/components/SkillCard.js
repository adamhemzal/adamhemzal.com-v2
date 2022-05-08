import React from "react";
import { AdobeIcon } from "../icons/AdobeIcon";
import { ReactIcon } from "../icons/ReactIcon";
import { NodeIcon } from "../icons/NodeIcon";
import { GatsbyIcon } from "../icons/GatsbyIcon";
import { WordPressIcon } from "../icons/WordPressIcon";
import { LeafletIcon } from "../icons/LeafletIcon";
import { GulpIcon } from "../icons/GulpIcon";
import { SassIcon } from "../icons/SassIcon";
import { TailwindIcon } from "../icons/TailwindIcon";
import { DotNetCoreIcon } from "../icons/DotNetCoreIcon";

export default function SkillCard({ name, icon, link, customClass }) {
    // Load dynamically icons
    let selectedIcon;
    switch(icon) {
        case "adobe": 
            selectedIcon = <AdobeIcon customClass="image-svg"/>;
            break;
        case "wordpress":
            selectedIcon = <WordPressIcon customClass="image-svg" />;
            break;
        case "react":
            selectedIcon = <ReactIcon customClass="image-svg" />;
            break;
        case "node":
            selectedIcon = <NodeIcon customClass="image-svg" />;
            break;
        case "gatsby":
            selectedIcon = <GatsbyIcon customClass="image-svg" />;
            break;
        case "leaflet":
            selectedIcon = <LeafletIcon />;
            break;
        case "gulp":
            selectedIcon = <GulpIcon />
            break;
        case "sass":
            selectedIcon = <SassIcon customClass="image-svg" />
            break;
        case "dotnetcore":
            selectedIcon = <DotNetCoreIcon customClass="image-svg" />
            break;
        case "tailwind":
            selectedIcon = <TailwindIcon customClass="image-svg"/>
            break;
        default: 
            selectedIcon = <p>No icon</p>;
            break;
    }

    return (
        <a href={link} rel="noopener noreferrer" target="_blank" className={`skill-card ${customClass}`}>
            {selectedIcon}
            <p className="name">{name}</p>
        </a>
    );
}
