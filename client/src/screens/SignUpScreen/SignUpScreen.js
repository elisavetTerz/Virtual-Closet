import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TextInput,
  Button,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState } from "react";
import SocialSignInButtons from "../../components/SocialSignInButtons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { URL } from "../../../config";
import Closet_img from "../../assets/images/background/closet_img_2.jpeg";

// const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

const SignUpScreen = ({ navigation }) => {
  const [form, setValues] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });

  const [message, setMessage] = useState("");
  // const navigation = useNavigation();
  // const pwd = watch('password');
  const handleSubmit = async () => {
    try {
      debugger;
      const response = await axios.post(`${URL}/users/register`, {
        username: form.username,
        email: form.email,
        password: form.password,
        password2: form.password2,
      });
      setMessage(response.data.message);
      console.log(response);
      setValues({});
      if (response.data.ok) {
        setTimeout(() => navigation.navigate("Login"), 1500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onSignInPressed = () => {
    navigation.navigate("SignIn");
  };
  const onTermsOfUsePressed = () => {
    console.warn("TERMSOFUSE");
  };
  const onPrivacyPolicyPressed = () => {
    console.warn("PRIVACYPOLICY");
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
          <Text style={styles.title}>Virtual Smart Closet</Text>
          <Text style={styles.title_signup}>Create an account</Text>

          <View style={styles.input_view}>
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, username: text })}
              placeholder="Username"
              placeholderTextColor="#c0c0c0"
            />
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, email: text })}
              placeholder="Email"
              placeholderTextColor="#c0c0c0"
            />
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, password: text })}
              placeholder="Password"
              placeholderTextColor="#c0c0c0"
            />
            <TextInput
              style={styles.text_input}
              onChangeText={(text) => setValues({ ...form, password2: text })}
              placeholder="Repeat Password"
              placeholderTextColor="#c0c0c0"
            />

            <Button
              title="Register"
              onPress={handleSubmit}
              style={styles.button}
              color="#00000000"
            />
            <Text style={styles.text}>
              By registering you confirm that you accept {"\n"} our{" "}
              <Text style={styles.link} onPress={onTermsOfUsePressed}>
                Terms of Use
              </Text>{" "}
              and{" "}
              <Text style={styles.link} onPress={onPrivacyPolicyPressed}>
                Privacy Policy
              </Text>
            </Text>
            <SocialSignInButtons />
            <Button
              title="Have an account? Sign in"
              onPress={onSignInPressed}
              style={styles.button}
              color="#00000000"
            />
            <View style={styles.message}>{message}</View>
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
  title_signup: {
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
    height: "8%",
    margin: 12,
    borderWidth: 2,
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
  },
  text: {
    color: "gray",
    marginVertical: 10,
    textAlign: "center",
  },
  link: {
    color: "#FDB075",
  },
  button: {
    borderRadius: 50,
  },
  message: {},
});

export default SignUpScreen;
