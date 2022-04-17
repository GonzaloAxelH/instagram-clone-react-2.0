import React, { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import { Link } from "react-router-dom";
import UserContext from "../../context/user";
import HomeIcon from "../Icons/HomeIcon";
import Logo from "../Logo/Logo";
import LogOut from "../Icons/LogOut";
import UserImage from "../Images/UserImage";
import Button from "../buttons/Button";

export default function Header() {
  const { user } = useContext(UserContext);

  const handleLogOut = async () => {
    const auth = getAuth();
    await signOut(auth);
  };
  return (
    <header className="h-16 bg-white border-b border-gray-primary mb-8 fixed w-full z-50">
      <div className="container mx-auto max-w-screen-lg h-full">
        <div className="flex justify-between h-full">
          <div className="text-gray-700 text-center flex items-center align-items cursor-pointer">
            <h1 className="flex justify-center w-full">
              <Link to="/" aria-label="Intagram Logo">
                <Logo className="mt-2 w-6/12" />
              </Link>
            </h1>
          </div>

          <div className="text-gray-700 text-center flex items-center align-items">
            {user && (
              <Link to="/" className="m-2">
                <HomeIcon />
              </Link>
            )}
            {user && (
              <button
                className="m-2"
                type="button"
                title="Sign Out"
                onClick={handleLogOut}
                onKeyDown={(e) => e.key === "Enter" && handleLogOut()}
              >
                <LogOut />
              </button>
            )}
            <div className="flex items-center cursor-pointer">
              {user && (
                <Link className="m-2" to={`/p/${user.displayName}`}>
                  <UserImage name={user.displayName} />
                </Link>
              )}
              {!user && (
                <Link to="/login">
                  <Button invert>LogIn</Button>
                </Link>
              )}
              {!user && (
                <Link to="/signup">
                  <Button>Sign Up</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
