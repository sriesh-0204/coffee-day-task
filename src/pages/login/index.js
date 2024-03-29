import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.scss";
import { Images } from "../../assets/images";
import { loginPageText } from "../../data/loginConstant";
import Input from "../../html-components/Input";
import PrimaryButton from "../../html-components/primaryButton";
import { signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from "firebase/auth";
import "../../stylesheet/common.scss";
import { IdConstant } from "../../data/appConstant";
import Loader from "../../html-components/loader";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);
  const [loader, setLoader] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const signIn = (e) => {
    setLoader(true)
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        localStorage.setItem("accessToken", JSON.stringify(userCredential?.user?.accessToken));
        const token = localStorage.getItem("accessToken")
        if (token) {
          setSuccessMessage(true);
          setTimeout(() => {
            navigate("/dashboard");
            setLoader(false)
          }, 3000);
        } else{
          setLoader(false);
        }
      })
      .catch((error) => {
      });
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-wrap">
          <div className="login-user-image">
            <img src={Images.LogoUserImage} />
          </div>
          <div className="login-form">
            {successMessage && <div className="success">Success</div>}
            <h1>{loginPageText.LOGIN}</h1>
            <div className="login-form-validate">
              <form onSubmit={signIn}>
                <Input
                  value={email}
                  type="text"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Name"
                  name="email"
                />
                <Input
                  value={password}
                  type="text"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter Password"
                  name="password"
                />
                <PrimaryButton
                  label={loader ? <Loader /> : IdConstant.SUBMIT}
                  type="submit"
                />
              </form>
              <div onClick={() => navigate("/signup")} className="login-signup">
                <a>{loginPageText.SIGNUP} </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
