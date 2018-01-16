import React from 'react';
import TextField from 'material-ui/TextField';

const RenderTextField = ({
  meta: { touched, error } = {},
  input: { ...inputProps },
  ...props
}) => (
  <TextField
      errorText={touched && error}
      {...inputProps}
      {...props}
      fullWidth
  />
);

export default RenderTextField