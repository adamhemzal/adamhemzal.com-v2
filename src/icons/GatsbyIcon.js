import React from "react";

export const GatsbyIcon = ({ customClass }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="-2 0 30 30"
    className={customClass}
  >
    <g id="monogram">
      <circle fill="#663399" cx="14" cy="14" r="14" />
      <g>
        <path
          fill="#FFFFFF"
          d="M6.2,21.8C4.1,19.7,3,16.9,3,14.2L13.9,25C11.1,24.9,8.3,23.9,6.2,21.8z"
        />
        <path
          fill="#FFFFFF"
          d="M16.4,24.7L3.3,11.6C4.4,6.7,8.8,3,14,3c3.7,0,6.9,1.8,8.9,4.5l-1.5,1.3C19.7,6.5,17,5,14,5
        c-3.9,0-7.2,2.5-8.5,6L17,22.5c2.9-1,5.1-3.5,5.8-6.5H18v-2h7C25,19.2,21.3,23.6,16.4,24.7z"
        />
      </g>
    </g>
  </svg>
);
