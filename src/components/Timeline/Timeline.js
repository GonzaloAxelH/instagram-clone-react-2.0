import React from "react";
import usePhotos from "../../hooks/useFotos";

export default function Timeline() {
  usePhotos();
  return (
    <div className="container col-span-2">
      <p>I am Timeline</p>
    </div>
  );
}
