import {
  View,
  TextInput,
  Button,
  ImageBackground,
  StyleSheet,
  StatusBar,
  ScrollView,
  Text,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import Closet_img from "../../assets/images/background/closet_img_2.jpeg";
import axios from "axios";
import { URL, JWT_SECRET } from "../../../config";
import JWT from "expo-jwt";

const SignInScreen = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const [currentUser, setCurrentUser] = useState();
  const [form, setValues] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(`${URL}/users/login`, {
        username: form.username,
        password: form.password,
      });
      setMessage(response.data.message);
      if (response.data.ok) {
        // here after login was successful we extract the email passed from the server inside the token
        let decodedToken = JWT.decode(response.data.token, JWT_SECRET, {
          timeSkew: 30,
        });
        console.log(
          "ID extracted from the JWT token after login: ",
          decodedToken
        );
        setCurrentUser({
          username: decodedToken.userName,
          id: response.data.id,
        });
        setTimeout(() => navigation.navigate("HomeScreen"), 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onSignUpPressed = () => {
    console.warn("SIGNUP");
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={Closet_img}
        style={styles.image_view}
        resizeMode="cover"
      >
        <ScrollView
          style={styles.scrollView}
          resetScrollToCoords={{ x: 0, y: 0 }}
          scrollEnabled={true}
        >
          <Text style={styles.title}>
            Welcome to {"\n"} Virtual Smart Closet!!!
          </Text>
          <Text style={styles.title_signin}>Sign in</Text>
          <View style={styles.input_view}>
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, username: text })}
              placeholder="Username"
              placeholderTextColor="#c0c0c0"
            />
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, password: text })}
              placeholder="Password"
              placeholderTextColor="#c0c0c0"
            />

            <Button
              title="Sign In"
              style={styles.signin_button}
              onPress={handleSubmit}
              color="#00000000"
            />
            <SocialSignInButtons />
            <Button
              title="Don't have an account? Create one"
              style={styles.signup_button}
              onPress={onSignUpPressed}
              color="#00000000"
            />
            <View style={styles.message}>
              <Text>{message}</Text>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    flex: 1,
    // marginHorizontal: 20,
  },
  image_view: {
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    color: "#c0c0c0",
    fontSize: 30,
  },
  title_signin: {
    flex: 2,
    // fontWeight: "bold",
    textAlign: "center",
    color: "#FDB075",
    fontSize: 15,
  },
  input_view: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: "#fff",
    width: "100%",
    height: "100%",
    marginTop: 20,
  },
  text_input: {
    borderColor: "#c0c0c0",
    width: "80%",
    height: "12%",
    margin: 12,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  signin_button: {},
  signup_button: {},
  message: {},
});

export default SignInScreen;
