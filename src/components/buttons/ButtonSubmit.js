import React from "react";

export default function ButtonSubmit({
  invert,
  isDisable,
  children,
  ...props
}) {
  const btnStyleInvert = "bg-white text-black border cursor-pointer";
  const btnStyle = `bg-blue-medium text-white ${isDisable && "opacity-50"}`;
  const baseStyle = "flex justify-center items-center w-full rounded h-8 font-bold mt-2";
  return (
    <button
      disabled={isDisable}
      className={`${baseStyle} ${invert ? btnStyleInvert : btnStyle}`}
      type="submit"
      {...props}
    >
      {children}
    </button>
  );
}
