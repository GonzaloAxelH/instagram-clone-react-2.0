import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Instagram";
  });
  return <div>Home</div>;
}
