import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import {useForm} from 'react-hook-form';

const ConfirmEmailScreen = () => {
  const {control, handleSubmit} = useForm();
  const navigation = useNavigation();

  const onConfirmPressed = (data) => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };
  const onResendCodePressed = () => {
    console.warn(RESENDCODE)
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Confirm your email</Text>
        <CustomInput 
        placeholder="Enter the confirmation code here" 
        name="code"
        control={control}
        rules={{
          required: 'Confirmation code is required'
        }}
        />

        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onConfirmPressed)}
        />
        <CustomButton
          text="Resend code"
          onPress={onResendCodePressed}
          type="SECONDARY"
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

export default ConfirmEmailScreen;