import React from "react";

export default function Button({ invert, children, ...props }) {
  return (
    <button
      {...props}
      className={`${
        invert ? "bg-white" : "bg-blue-medium"
      } font-bold text-sm rounded ${
        invert ? "text-blue-medium" : "text-white"
      }  w-full h-8 w-20 ${props.className}`}
      type="button"
    >
      {children}
    </button>
  );
}
