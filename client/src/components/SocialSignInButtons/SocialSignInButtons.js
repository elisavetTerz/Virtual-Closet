import { View, Text, Button, StyleSheet } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const SocialSignInButtons = () => {
  const onSignInFacebook = () => {
    console.warn("FACEBOOK");
  };
  const onSignInGoogle = () => {
    console.warn("GOOGLE");
  };
  return (
    <>
      <FontAwesome5.Button
        name="facebook"
        size={24}
        color="black"
        backgroundColor="#00000000"
        onPress={onSignInFacebook}
      >
        Sign In with Facebook
      </FontAwesome5.Button>
      {/* <Button
          title="Sign In with Facebook"
          onPress={onSignInFacebook}
          color="#00000000"
        /> */}

      <Ionicons.Button
        name="ios-logo-google"
        size={24}
        color="black"
        backgroundColor="#00000000"
        onPress={onSignInGoogle}
      >
        Sign In with Google
      </Ionicons.Button>
      {/* <Button
          title="Sign In with Google"
          onPress={onSignInGoogle}
          color="#00000000"
        /> */}
    </>
  );
};

export default SocialSignInButtons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
});
