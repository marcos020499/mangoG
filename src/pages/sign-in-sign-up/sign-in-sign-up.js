import React from "react";
import styled from "styled-components";
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const SignInAndSignUp = () => (
  <ContainerSignPage>
    <SignIn />
    <SignUp />
  </ContainerSignPage>
);

export default SignInAndSignUp;
const ContainerSignPage = styled.div`
  display: flex;
  margin: 0 15vw 0 15vw;
  @media screen and (max-width: 768px) {
    display: inline-block;
  }
`;
