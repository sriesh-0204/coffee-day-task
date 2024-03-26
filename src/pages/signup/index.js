import React, { useEffect, useState } from "react";
import { Images } from "../../assets/images";
import { loginPageText } from "../../data/loginConstant";
import Input from "../../html-components/Input";
import PrimaryButton from "../../html-components/primaryButton";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import '../../stylesheet/common.scss'
import { IdConstant } from "../../data/appConstant";

const SignUp = () => {
    const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [messge, setMessage] = useState(false);
  const auth = getAuth();

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        if(userCredential?.user?.accessToken){
            setMessage(true);
            setTimeout(() => { 
                navigate('/login')
            }, 5000)
        }
        console.log(userCredential, "userCredential");
      })
      .catch((error) => {
        console.log(error, "error");
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
            <h1>{loginPageText.SIGNUP}</h1>
            <div className="login-form-validate">
              <form onSubmit={signUp}>
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
                <PrimaryButton label={IdConstant.SUBMIT} type="submit" />
                {
                    messge && <div className="success">
                    {IdConstant.SUCCESS}
                    </div>
                }
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
