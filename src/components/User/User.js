import React, { memo } from "react";

import "react-loading-skeleton/dist/skeleton.css";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { Link } from "react-router-dom";
import UserImage from "../Images/UserImage";

const User = ({ userName, fullName }) => {
  return !userName || !fullName ? (
    <Skeleton count={1} height={61.89} />
  ) : (
    <Link to={`/p/${userName}`} className="grid grid-cols-4 gap-4 items-center">
      <div className="flex items-center justify-between cols-span-1">
        <UserImage w={12} h={12} name={userName} />
      </div>
      <div className="col-span-3">
        <p className="font-bold text-sm">{userName}</p>
        <p className="text-sm">{fullName}</p>
      </div>
    </Link>
  );
};

User.propTypes = {
  userName: PropTypes.string,
  fullName: PropTypes.string,
  test: PropTypes.number,
};

export default User;

User.whyDidYouRender = true;
