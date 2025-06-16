import React from 'react'

function Button({
    children,
    type = 'button',
    bgColor = 'bg-blue-500',
    textColor = 'text-white',
    className = '',
    ...props
}) {
    return (
        <div
            className={`inline-block px-4 py-2 duration-200 rounded-full cursor-pointer ${bgColor} ${textColor} ${className}`} {...props}
        >
            {children}
        </div>
    )
}

export default Button