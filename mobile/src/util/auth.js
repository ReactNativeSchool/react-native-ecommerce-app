import React from 'react';
import { Alert } from 'react-native';
import * as yup from 'yup';

export const useLogin = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [errors, setErrors] = React.useState({});

  const submit = () => {
    const nextErrors = {};
    if (email.length === 0) {
      nextErrors.email = 'This field is required.';
    }
    if (password.length === 0) {
      nextErrors.password = 'This field is required.';
    }
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return null;
    }

    Alert.alert('Success!', `Email: ${email} \n Password: ${password}`);
    return null;
  };

  return {
    submit,
    errors,
    email,
    setEmail,
    password,
    setPassword,
  };
};

export const validateCredentials = (credentials = {}) => {
  const schema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password'),
    // Look at yup.when to only use this on sign up
    // https://github.com/jquense/yup#mixedwhenkeys-string--arraystring-builder-object--value-schema-schema-schema
    confirmPassword: yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  });

  return schema.validate(credentials, { abortEarly: false });
};
