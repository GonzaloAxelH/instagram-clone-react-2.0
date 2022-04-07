import React from "react";

export default function Input({ getValue, name, ...props }) {
  return (
    <input
      aria-label={`Enter your email adress${name}`}
      className="text-sm text-gray-base w-full mr-3 py-5 px-4 h-2 border border-gray-primary rounded mb-2"
      onChange={(e) => getValue(e.target.value)}
      {...props}
    />
  );
}
