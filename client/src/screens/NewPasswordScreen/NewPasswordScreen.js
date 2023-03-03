import { View, Text, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const NewPasswordScreen = () => {
  const navigation = useNavigation();

  const onSubmitPressed = () => {
    console.warn("SUBMIT");
    navigation.navigate('Home');
  };
  const onSignInPressed = () => {
    console.warn("SIGNIN");
    navigation.navigate('SignIn');
  };

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Reset your password</Text>
        <TextInput
          placeholder="Code"
        />
        <TextInput
          placeholder="Enter your new password"
        />
        <Button
          title="Submit"
          onPress={onSubmitPressed}
        />
        <Button
          title="Back to Sign in"
          onPress={onSignInPressed}
        />
      </SafeAreaView>
    </ScrollView>
  )
};

const styles = StyleSheet.create({
  container: {
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