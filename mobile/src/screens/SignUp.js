import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { TextInput } from '../components/Form';
import { Button } from '../components/Button';
import colors from '../constants/colors';
import { validateCredentials } from '../util/auth';
import { useSignUp } from '../util/api';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
  },
});

export const SignUp = ({ navigation }) => {
  const [form, setForm] = React.useState({});
  const [errors, setError] = React.useState({});
  const signup = useSignUp();

  const setValue = (field, value) => {
    setForm(f => {
      const next = { ...f };
      next[field] = value;
      return next;
    });
  };

  const submit = async () => {
    try {
      await validateCredentials(form);
    } catch (error) {
      const nextErrors = {};
      error.inner.forEach(e => {
        nextErrors[e.path] = e.message;
      });
      setError(nextErrors);
      return;
    }

    signup.mutate(form, {
      onSuccess: () => {
        navigation.pop();
      },
    });
  };

  return (
    <ScrollView style={styles.container}>
      <TextInput
        label="Email Address"
        onChangeText={text => setValue('email', text)}
        errorText={errors.email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        label="Password"
        onChangeText={text => setValue('password', text)}
        errorText={errors.password}
        secureTextEntry
      />
      <TextInput
        label="Confirm Password"
        onChangeText={text => setValue('confirmPassword', text)}
        errorText={errors.confirmPassword || signup?.error?.message}
        secureTextEntry
      />
      <Button onPress={submit} isLoading={signup.isLoading}>
        Sign Up
      </Button>
    </ScrollView>
  );
};
