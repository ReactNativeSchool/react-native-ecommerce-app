import React from 'react';
import { Alert } from 'react-native';
import * as yup from 'yup';
import create from 'zustand';
import { persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuth = create(
  persist(
    set => ({
      token: null,
      setToken: token => set({ token }),
      removeToken: () => set({ token: null }),
    }),
    {
      name: 'auth',
      getStorage: () => AsyncStorage,
    },
  ),
);

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

export const validateCredentials = (
  credentials = {},
  useConfirmPassword = true,
) => {
  const extraValidation = {};

  if (useConfirmPassword) {
    extraValidation.confirmPassword = yup
      .string()
      .test('passwords-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      });
  }

  const schema = yup.object().shape({
    email: yup.string().email().required().label('Email'),
    password: yup.string().required().label('Password'),
    ...extraValidation,
  });

  return schema.validate(credentials, { abortEarly: false });
};
