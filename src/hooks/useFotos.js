import { set } from "date-fns/esm";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/user";
import { getUserObjByUserId, getPhotos } from "../services/firebase";
export default function usePhotos() {
  const [photos, setPothos] = useState(null);
  const { user: userId = "" } = useContext(UserContext);
  useEffect(() => {
    async function fetchTimelinePhotos() {
      const { following } = await getUserObjByUserId(userId);
      let followedUserPhotos = [];
      if (followedUserPhotos.length > 0) {
        followedUserPhotos = await getPhotos(userId, following);
      }
      setPothos(followedUserPhotos);
    }
    fetchTimelinePhotos();
    console.log(photos);
    //fetchTimelinePhotos();
  }, []);
}
