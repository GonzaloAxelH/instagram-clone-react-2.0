import React from "react";
import PropTypes from "prop-types";
export default function FooterPost({ username, caption }) {
  return (
    <div className="ml-4 mt-4">
      <span className="mr-1 font-bold">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

FooterPost.propTypes = {
  username: PropTypes.string,
  caption: PropTypes.string,
};
