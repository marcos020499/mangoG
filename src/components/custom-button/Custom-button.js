import React from "react";

import { Inverted, GoogleSignIn, Button } from "./style";
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <Button
    className={` ${inverted ? { Inverted } : ""} ${
      isGoogleSignIn ? { GoogleSignIn } : ""
    } ${Button}`}
    {...otherProps}
  >
    {children}
  </Button>
);

export default CustomButton;
