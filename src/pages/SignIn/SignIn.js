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

  const [load, setLoad] = useState(false)
  const isUserInvalid = password === "" || emailAdress === "";

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoad(true)
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
          following: [],
          userId: user.uid,
        });

        navigate("/", { replace: true });
      } catch (error) {
        setLoad(false)
        setError(error.message);
      }
    }
    setLoad(false)
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
            <ButtonSubmit isDisable={isUserInvalid}>Sign Up Now
              <svg role="status" className={`${!load && "hidden"}  ml-2 inline mr-2 w-4 h-4 animate-spin text-gray-600 fill-blue-500`} viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
              </svg>
            </ButtonSubmit>
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
