import { View, TextInput, Button, Image, StyleSheet, SafeAreaView, useWindowDimensions, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import Logo from '../../assets/images/background/Logo_1.jpg';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import axios from "axios";
import { URL } from '../../../config';
import * as jose from 'jose';

const SignInScreen = (props) => {
  // const { height } = useWindowDimensions();
  const navigation = useNavigation();
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      debugger
      const response = await axios.post(`${URL}/users/login`, {
        username: form.username.toLowerCase(),
        password: form.password,
      });
      setMessage(response.data.message);
      if (response.data.ok) {
        // here after login was successful we extract the email passed from the server inside the token 
        let decodedToken = jose.decodeJwt(response.data.token);
        console.log("Email extracted from the JWT token after login: ", decodedToken.userName);
        setTimeout(() => {
          props.login(response.data.token);
          navigate('/');
        }, 2000);
      };
    } catch (error) {
      console.log(error);
    }
  };
  const onSignUpPressed = () => {
    console.warn("SIGNUP");
    navigation.navigate('SignUp');
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.root}>
        <Image source={Logo} style={[styles.logo, { height: height * 0.3 }]} resizeMode="contain" />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setValues({...form, username:text})}
          placeholder="Username"
        // rules={{required: 'Username is required'}}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setValues({...form, password:text})}
          placeholder="Password"
          // rules={{required: 'Password is required', minLength: {value: 4, message: 'Password should be minimum 4 characters long'}}}
          // secureTextEntry
        />

        <Button
          text="Sign In"
          onPress={handleSubmit}
          type="PRIMARY" />
        {/* <SocialSignInButtons /> */}

        <Button
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10, 
  },
  logo: {
    width: '80%',
    maxWidth: 400,
    maxHeight: 200,
  },
});

export default SignInScreen;