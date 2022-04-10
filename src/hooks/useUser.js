import { useState, useContext, useEffect } from "react";
import UserContext from "../context/user";
import { getUserObjByUserId } from "../services/firebase";
export default function useUser() {
  const [activeUser, setActiveUser] = useState({});
  const { user } = useContext(UserContext);
  useEffect(() => {
    async function fetchUser() {
      const resUser = await getUserObjByUserId(user.uid);
      setActiveUser(resUser);
    }
    fetchUser();
  }, [user]);

  return { user: activeUser };
}
