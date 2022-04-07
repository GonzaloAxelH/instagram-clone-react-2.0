import React from "react";

export default function ButtonSubmit({ isDisable, children, ...props }) {
  return (
    <button
      disabled={isDisable}
      className={`bg-blue-500 text-white w-full rounded h-8 font-bold ${
        isDisable && "opacity-50"
      }`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}
