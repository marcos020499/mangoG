import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../form-input/form-input";
import CustomButton from "../custom-button/Custom-button";
import { useState } from "react";
import { ContainerSignIn, GoogleButton } from "./style";
import { toast } from "react-toastify";
import { Link, useHistory } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/user/user.actions";

toast.configure();
const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SingIn = (props) => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);
  let history = useHistory();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleOnChangeemail = (e) => {
    setemail(e.target.value);
  };
  const handleOnChangepassword = (e) => {
    setpassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  };
  /*
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth
        .signInWithemailAndpassword(email, password)
        .then(
          () => setemail(""),
          setpassword(""),
          history.push("/userAuth"),
          toast.success(`bienvenid@ ${email}`)
        );
    } catch (err) {
      console.error(err);
    }
    return handleSubmit
  }*/
  return (
    <ContainerSignIn>
      <Link to="/signinAdmin">
        <CustomButton>Are you admin?</CustomButton>
      </Link>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleOnChangeemail}
          value={email}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleOnChangepassword}
          label="password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
        </div>
      </form>
      <GoogleButton onClick={handleGoogleSignIn}>
        Sign in with Google
      </GoogleButton>
    </ContainerSignIn>
  );
};

export default SingIn;
