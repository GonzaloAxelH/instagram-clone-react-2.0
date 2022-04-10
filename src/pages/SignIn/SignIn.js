import { collection, setDoc, doc } from "firebase/firestore";
import { useState, useContext, useEffect } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import Input from "../../components/inputs/Input";
import FirebaseContext from "../../context/firebase";
import { doesUsernameExist } from "../../services/firebase";
import Logo from "../../components/Logo/Logo";

const SignIn = () => {
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const { db } = useContext(FirebaseContext);
  const [username, setUsername] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailAdress, setEmalAdress] = useState("");
  const [password, setPassword] = useState("");
  const isUserInvalid = password === "" || emailAdress === "";

  const handleSignup = async (e) => {
    e.preventDefault();
    let existe = await doesUsernameExist(username);
    if (!existe) {
      try {
        const auth = getAuth();
        const { user } = await createUserWithEmailAndPassword(
          auth,
          emailAdress,
          password
        );

        await updateProfile(user, {
          displayName: username,
        });
        console.log(user.uid);

        await setDoc(doc(db, "users", user.uid), {
          username: username.toLowerCase(),
          fullName: fullname,
          emailAddress: emailAdress.toLowerCase(),
          dateCreated: Date.now(),
          followers: [],
          userId: user.uid,
        });

        navigate("/", { replace: true });
      } catch (error) {
        setError(error.message);
      }
    }
    setError(existe ? "El usuario ya existe" : "");
  };
  useEffect(() => {
    document.title = "Sign In - Instagram";
  }, []);
  return (
    <div className="flex  mx-auto items-center max-w-screen-md h-screen flex-wrap">
      <div className="flex w-3/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram App"
        />
      </div>
      <div className="w-2/5 flex flex-col items-center">
        <Logo />
        {error && <p className="mb-4 text-xs text-red-primary">{error}</p>}
        <form onSubmit={handleSignup}>
          <Input
            name="username"
            type="text"
            placeholder="Username"
            getValue={setUsername}
          />
          <Input
            name="fullname"
            type="text"
            placeholder="Fullname"
            getValue={setFullname}
          />
          <Input
            name="email adress"
            type="email"
            placeholder="Email adress"
            getValue={setEmalAdress}
          />
          <Input
            type="password"
            getValue={setPassword}
            placeholder="Password"
          />

          <div className="flex flex-col text-center">
            <ButtonSubmit isDisable={isUserInvalid}>Sign Up Now</ButtonSubmit>
            <span className="mt-4 text-sm">
              User account exist ?{" "}
              <Link className="text-blue-medium hover:underline" to="/login">
                Login
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
