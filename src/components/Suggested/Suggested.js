import React, { useState } from "react";
import PropTypes from "prop-types";
import UserImage from "../Images/UserImage";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import { updateFollowing, updateFollows } from "../../services/firebase";
export default function Suggested({ userDocId, profileId, username, userId }) {
  const [followed, setFollowed] = useState(false);
  const { user } = useUser();

  async function handleFollowUser() {
    setFollowed(true);
    const idUserLogged = user.userId;
    const idUserProfile = profileId;
    await updateFollowing({
      idUserLogged,
      idUserProfile,
      isFollow: false,
    });

    await updateFollows({ idUserLogged, idUserProfile, isFollow: false });
  }
  return !followed ? (
    <div className="flex flex-row items-center align-items justify-between">
      <div className="flex items-center justify-between">
        <UserImage name={username} className="mr-3" />
        <Link to={`/p/${username}`}>
          <p className="font-bold text-sm">{username}</p>
        </Link>
      </div>
      <div className="">
        <button
          className="text-xs font-bold text-blue-medium"
          type="button"
          onClick={handleFollowUser}
        >
          Follow
        </button>
      </div>
    </div>
  ) : null;
}

Suggested.propTypes = {
  userDocId: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  profileId: PropTypes.string.isRequired,
  userId: PropTypes.string,
};
