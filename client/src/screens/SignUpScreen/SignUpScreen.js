import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import { useForm } from 'react-hook-form';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
  const {control, handleSubmit, watch} = useForm();
  const pwd = watch('password');
  const navigation = useNavigation();

  const onRegisterPressed = () => {
    navigation.navigate('ConfirmEmail');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onTermsOfUsePressed = () => {
    console.warn("TERMSOFUSE")
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("PRIVACYPOLICY")
  };


  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text styles={styles.title}>Create an acoount</Text>
        <CustomInput
          name="username"
          control={control}
          placeholder="Username"
          rules={{
            required: 'Username is required',
            minLength: {
              value: 3,
              message: 'Username should be at least 3 characters long'
            },
            maxLength: {
              value: 24,
              message: 'Username should be at max 24 characters long'
            },
          }}
        />
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{ pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}
        />
        <CustomInput
          name="password"
          control={control}
          placeholder="Password"
          // secureTextEntry
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be at least 6 characters long'
            },
          }}
        />
        <CustomInput
          name="password-repeat"
          control={control}
          placeholder="Repeat Password"
          // secureTextEntry
          rules={{
            validate: value =>
              value === pwd || 'Password do not match',
          }}
        />

        <CustomButton
          text="Register"
          onPress={handleSubmit(onRegisterPressed)}
          type="PRIMARY" />
        <Text style={styles.text}>
          By registering you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />

        <CustomButton
          text="Have an account? Sign in"
          onPress={onSignInPressed}
          type="TERTIARY"
        />

      </SafeAreaView>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    padding: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#051C60',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 10,
  },
  link: {
    color: '#FDB075'
  }
});

export default SignUpScreen;