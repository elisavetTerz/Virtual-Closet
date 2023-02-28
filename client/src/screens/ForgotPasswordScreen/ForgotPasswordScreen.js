import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ForgotPasswordScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onSendPressed = (data) => {
    console.warn(data);
    navigation.navigate('NewPassword');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
 
  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <CustomInput 
        placeholder="Username"
        name="username"
        control={control}
        rules={{
          required: 'Username is required'
        }}
        />
        <CustomButton
          text="Send"
          onPress={handleSubmit(onSendPressed)}
           />
        <CustomButton
          text="Back to Sign in"
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
    fontSize: 30,
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

export default ForgotPasswordScreen;