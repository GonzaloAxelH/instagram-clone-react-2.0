import React, { useEffect } from "react";
import Timeline from "../../components/Timeline/Timeline";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import useUser from "../../hooks/useUser";
export default function Home() {
  useEffect(() => {
    document.title = "Instagram";
  });

  return (
    <div className="bg-gray-background">
      <Header />
      <div className="grid grid-cols-3 gap-4 justify-center mx-auto max-w-screen-lg">
        <Timeline />
        <Sidebar />
      </div>
    </div>
  );
}
