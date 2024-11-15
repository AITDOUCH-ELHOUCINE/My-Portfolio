import React from 'react';

const CustomIcon = (props) => (
    <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        className="w-8 h-8" // Optional: Adjust size here
        aria-hidden="true"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 48C141.13 48 48 141.13 48 256s93.13 208 208 208 208-93.13 208-208S370.87 48 256 48z"></path>
        <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 48c-58.07 0-112.67 93.13-112.67 208S197.93 464 256 464s112.67-93.13 112.67-208S314.07 48 256 48z"></path>
        <path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M117.33 117.33c38.24 27.15 86.38 43.34 138.67 43.34s100.43-16.19 138.67-43.34m0 277.34c-38.24-27.15-86.38-43.34-138.67-43.34s-100.43 16.19-138.67 43.34"></path>
        <path fill="none" strokeMiterlimit="10" strokeWidth="32" d="M256 48v416m208-208H48"></path>
    </svg>
);

export default CustomIcon;
