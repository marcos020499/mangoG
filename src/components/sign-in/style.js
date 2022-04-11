import styled from "styled-components";
import CustomButton from "../custom-button/Custom-button";
export const ContainerSignIn = styled.div`
  margin: 2vw;
`;
export const GoogleButton = styled(CustomButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;
