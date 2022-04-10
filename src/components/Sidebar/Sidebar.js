import React, { useState, memo } from "react";
import useUser from "../../hooks/useUser";
import Suggestions from "../Suggestions/Suggestions";
import User from "../User/User";

function Sidebar() {
  const { user } = useUser();

  return (
    <div className="p-4">
      <User userName={user.username} fullName={user.fullName} />
      <Suggestions userId={user.userId} following={user.following} />
    </div>
  );
}

export default memo(Sidebar);

Sidebar.whyDidYouRender = true;
