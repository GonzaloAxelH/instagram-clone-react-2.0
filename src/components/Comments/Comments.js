import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import { Link } from "react-router-dom";
import FormAddComment from "../FormAddComment/FormAddComment";
export default function Comments({
  docId,
  comments: allComments,
  posted,
  commenInput,
}) {
  const [comments, setComments] = useState(allComments);

  return <div>
    <div className="p-4 pt-1 pb-4">
      {comments.length >= 3 && <p className="text-sm text-gray-base mb-1 cursor-pointer">
        View all {comments.length} comments
      </p>}
      {
        comments.slice(0, 3).map((item, index) => {
          return <p key={index} className="mb-1">
            <Link to={`/p/${item.displayName}`}>
              <span className="mr-1 font-bold">
                {item.displayName}
              </span>
              <span>{item.comment}</span>
            </Link>
          </p>
        })
      }
      <p className="text-gray-base text-xs mt-2">
        {formatDistance(posted, new Date())} ago
      </p>

    </div>
    <FormAddComment
      docId={docId}
      comments={comments}
      setComments={setComments}
      commentInput={commenInput}
    />
  </div>
}

Comments.propTypes = {
  docId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired,
  posted: PropTypes.number.isRequired,
  commenInput: PropTypes.object.isRequired,
};
