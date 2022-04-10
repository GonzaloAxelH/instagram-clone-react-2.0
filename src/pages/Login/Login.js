import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import Input from "../../components/inputs/Input";

import Logo from "../../components/Logo/Logo";
const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [emailAdress, setEmalAdress] = useState("");
  const [password, setPassword] = useState("");
  const [isUserInvalid, setIsUserInvalid] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, emailAdress, password)
      .then((userCredential) => {
        navigate("/", { replace: true });
      })
      .catch((error) => {
        setError(error.message);
        setEmalAdress("");
        setPassword("");
        setIsUserInvalid(false);
      });
    setTimeout(() => {
      setIsUserInvalid(false);
    }, 1000);
  };
  useEffect(() => {
    setIsUserInvalid(password === "" || emailAdress === "");
    document.title = "Login - Instagram";
  }, [password, emailAdress]);
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
        <form onSubmit={handleLogin} method="POST" className="pl-4 pr-4">
          <Input
            name="email adress"
            type="text"
            placeholder="Email adress"
            getValue={setEmalAdress}
          />
          <Input
            type="password"
            getValue={setPassword}
            placeholder="Password"
          />
          <div className="flex flex-col text-center">
            <ButtonSubmit isDisable={isUserInvalid}>Log In</ButtonSubmit>
            <span className="mt-4 text-sm">
              Not account exist ?{" "}
              <Link className="text-blue-medium hover:underline" to="/signup">
                Sign Up
              </Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
