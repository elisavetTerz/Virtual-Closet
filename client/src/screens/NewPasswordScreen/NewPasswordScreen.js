import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn(data);
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Text style={styles.title}>Reset your password</Text>
        <TextInput
          placeholder="Code"
          
          // rules={{required: 'Code is required'}}
        />
         <TextInput
          placeholder="Enter your new password"
       
          // rules={{
          //   required: 'Password is required',
          //   minLength: {
          //     value: 6,
          //     message: 'Password should be at least 6 characters long'
          //   },
          // }}        
          />
        <Button
          text="Submit"
          onPress={onSubmitPressed}
        />
        <Button
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

export default NewPasswordScreen;