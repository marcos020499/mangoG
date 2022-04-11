import React from "react";

import { Group, Input, InputLabel } from "./style";
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <Group>
    <Input onChange={handleChange} {...otherProps} />
    {label ? (
      <InputLabel
        className={`${
          otherProps.value.length ? "Shrink" : ""
        } form-input-label`}
      >
        {label}
      </InputLabel>
    ) : null}
  </Group>
);

export default FormInput;
