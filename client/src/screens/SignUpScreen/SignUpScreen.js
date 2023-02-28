import { View, Text, StyleSheet, SafeAreaView, ScrollView, TextInput, Button } from 'react-native';
import React, { useState } from 'react';
import SocialSignInButtons from '../../components/SocialSignInButtons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import { URL } from '../../../config';

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = () => {
 
  const [form, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: '',
  });

  const [message, setMessage] = useState('');
  const navigation = useNavigation();
  // const pwd = watch('password');
  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}/users/register`, {
        username: form.username,
        email: form.email,
        password: form.password,
        password2: form.password2
      });
      setMessage(response.data.message);
      console.log(response);
      if (response.data.ok) {
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      }
    } catch (error) {
      console.log(error);
    }
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
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setValues({...form, email:text})}
          placeholder="Username"
        // rules={{
        //   required: 'Username is required',
        //   minLength: {
        //     value: 3,
        //     message: 'Username should be at least 3 characters long'
        //   },
        //   maxLength: {
        //     value: 24,
        //     message: 'Username should be at max 24 characters long'
        //   },
        // }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setValues({...form, username:text})}          
          placeholder="Email"
        // rules={{ pattern: { value: EMAIL_REGEX, message: 'Email is invalid' } }}
        />
        <TextInput
          style={styles.input}
          onChange={handleChange}
          onChangeText={(text)=>setValues({...form, password:text})}          
          placeholder="Password"
        // rules={{
        //   required: 'Password is required',
        //   minLength: {
        //     value: 6,
        //     message: 'Password should be at least 6 characters long'
        //   },
        // }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text)=>setValues({...form, password2:text})}          
          placeholder="Repeat Password"
          // rules={{
          //   validate: value =>
          //     value === pwd || 'Password do not match',
          // }}
        />

        <Button
          text="Register"
          onPress={handleSubmit}
          type="PRIMARY" />
        <Text style={styles.text}>
          By registering you confirm that you accept our{' '}
          <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use</Text> and{' '}
          <Text style={styles.link} onPress={onPrivacyPolicyPressed}>Privacy Policy</Text>
        </Text>
        <SocialSignInButtons />

        <Button
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
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
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