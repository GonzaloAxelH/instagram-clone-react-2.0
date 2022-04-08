import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found - Instagram";
  }, []);
  return (
    <div>
      <h1>Not found </h1>
      <Link to="/login" className="text-blue-medium hover:underline">
        Return to login
      </Link>
    </div>
  );
}
