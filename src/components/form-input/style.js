import styled from "styled-components";
import { Link } from "react-router-dom";

export const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;
export const Input = styled.input`
  background: none;
  background-color: white;
  color: $sub-color;
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid $sub-color;
  margin: 25px 0;
  &:focus {
    outline: none;
  }

  &:focus ~ .form-input-label {
    @include shrinkLabel();
  }
`;
export const InputLabel = styled.label`
  color: $sub-color;
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;
`;
export const Shrink = styled.div`
  @include shrinkLabel();
`;
