import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-5 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out  text-white  hover:scale-102 backdrop-blur-md border border-white/20 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}
