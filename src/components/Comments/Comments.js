import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
export default function Comments({
  docId,
  comments: allComments,
  posted,
  commenInput,
}) {
  const [comments, setComments] = useState(allComments);
  return <div>Comments</div>;
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commenInput: PropTypes.object.isRequired,
};
