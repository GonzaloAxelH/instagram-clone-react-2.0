import React from "react";

export default function UserImage({ w, h, name, ...props }) {
  return (
    <img
      {...props}
      className={`flex rounded-full w-${w ? w : 8} h-${h ? h : 8} ${
        props.className
      } `}
      src="/images/avatars/karl.jpg"
      alt={`${name} profile`}
    />
  );
}
