import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
import Suggested from "../Suggested/Suggested";
export default function Suggestions({ userId, following }) {
  const [profiles, setProfiles] = useState(null);
  useEffect(() => {
    async function fetchSuggestions() {
      const profiles = await getSuggestedProfiles({ userId, following });
      setProfiles(profiles);
    }
    if (userId) {
      fetchSuggestions();
    }
  }, [userId]);
  return profiles ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center justify-between mb-2">
        <p className="font-bold text-gray-base mt-4">Suggestions for you</p>
      </div>

      <div className="mt-4 grid gap-5">
        {profiles.map((profile) => {
          return (
            <Suggested
              key={profile.docId}
              userDocId={profile.docId}
              username={profile.username}
              profileId={profile.userId}
              userId={userId}
            />
          );
        })}
      </div>
    </div>
  ) : (
    <Skeleton count={1} height={250} />
  );
}

Suggestions.propTypes = {
  userId: PropTypes.string,
  following: PropTypes.array,
};
