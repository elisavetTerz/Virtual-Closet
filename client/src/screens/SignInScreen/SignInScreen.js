import { View, TextInput, Image, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/background/Logo_1.jpg';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';

const SignInScreen = () => {

  const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const { control, handleSubmit, formState: {errors}, } = useForm();

  const onSignInPressed = (data) => {
    //validate user
    navigation.navigate('Home');
  };
  const onForgotPasswordPressed = () => {
    navigation.navigate('ForgotPassword');
  };
  const onSignUpPressed = () => {
    console.warn("SIGNUP");
    navigation.navigate('SignUp');


  }
  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>

        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <CustomInput
          name="username"
          placeholder="Username"
          control={control}
          rules={{required: 'Username is required'}}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          control={control}
          rules={{required: 'Password is required', minLength: {value: 4, message: 'Password should be minimum 4 characters long'}}}
          secureTextEntry
        />

        <CustomButton
          text="Sign In"
          onPress={handleSubmit(onSignInPressed)}
          type="PRIMARY" />
        <CustomButton
          text="Forgot Password"
          onPress={onForgotPasswordPressed}
          type="TERTIARY" />
        <SocialSignInButtons />

        <CustomButton
          text="Don't have an account? Create one"
          onPress={onSignUpPressed}
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
  logo: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 200,
  },
});

export default SignInScreen;