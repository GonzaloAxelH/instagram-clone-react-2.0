import React from "react";
import PropTypes from "prop-types";
export default function FooterPost({ username, caption }) {
  return (
    <div className="p-4 pt-2 pb-8">
      <span className="mr-1 font-bold">{username}</span>
      <span>{caption}</span>
    </div>
  );
}

FooterPost.propTypes = {
  username: PropTypes.string,
  caption: PropTypes.string,
};
