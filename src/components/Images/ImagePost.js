import React from "react";
import PropTypes from "prop-types";
export default function ImagePost({ src, caption }) {
  return <img src={src} alt={caption} />;
}

ImagePost.propTypes = {
  src: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};
