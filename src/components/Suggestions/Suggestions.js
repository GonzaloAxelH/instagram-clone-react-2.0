import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Skeleton from "react-loading-skeleton";
import { getSuggestedProfiles } from "../../services/firebase";
export default function Suggestions({ userId }) {
  const [profiles, setProfiles] = useState(null);

  useEffect(() => {
    async function fetchSuggestions() {
      const profiles = await getSuggestedProfiles(userId);
      setProfiles(profiles);
    }
    fetchSuggestions();
  }, [userId]);
  return profiles ? (
    <div className="rounded flex flex-col">
      <div className="text-sm flex items-center justify-between mb-2">
        <p className="font-bold text-gray-base">Suggestions for you</p>
      </div>
    </div>
  ) : (
    <Skeleton count={1} height={250} />
  );
}

Suggestions.propTypes = {
  userId: PropTypes.string,
};