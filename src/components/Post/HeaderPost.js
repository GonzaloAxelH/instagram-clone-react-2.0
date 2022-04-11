import React from "react";
import PropTypes from "prop-types";
import UserImage from "../Images/UserImage";
import { Link } from "react-router-dom";
export default function HeaderPost({ username }) {
  return (
    <div className="flex border-b border-gray-primary h-4 p-4 py-8">
      <div className="flex items-center">
        <Link to={`/p/${username}`} className="flex items-center">
          <UserImage
            name={username}
            to={`/images/avatars/${username}.jpg`}
            className="mr-3"
          />
          <p className="font-bold text-sm"> {username}</p>
        </Link>
      </div>
    </div>
  );
}

HeaderPost.propTypes = {
  username: PropTypes.string.isRequired,
};
