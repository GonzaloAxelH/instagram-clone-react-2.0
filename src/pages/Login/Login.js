import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonSubmit from "../../components/buttons/ButtonSubmit";
import Input from "../../components/inputs/Input";
import FirebaseContext from "../../context/firebase";

const Login = () => {
  const history = useNavigate();
  const { firebase } = useContext(FirebaseContext);
  const [emailAdress, setEmalAdress] = useState("");
  const [password, setPassword] = useState("");
  const isUserInvalid = password === "" || emailAdress === "";

  const handleLogin = (e) => {
    e.preventDefault();
    console.log({ emailAdress, password });
  };
  useEffect(() => {
    document.title = "Login - Instagram";
  }, []);
  return (
    <div className="flex container items-center w-full justify-center h-screen m-auto">
      <div className="w-2/5">
        <img
          src="/images/iphone-with-profile.jpg"
          alt="iPhone with Instagram App"
        />
      </div>
      <div className="w-2/5">
        <h1>
          <img src="/images/logo.png" alt="Instagram" />
        </h1>
        <form onSubmit={handleLogin} method="POST">
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
          <ButtonSubmit isDisable={isUserInvalid}>Log In</ButtonSubmit>
        </form>
      </div>
    </div>
  );
};

export default Login;
