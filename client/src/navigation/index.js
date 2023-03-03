import React from "react";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
import NewPasswordScreen from "../screens/NewPasswordScreen";
import HomeScreen from "../screens/HomeScreen";

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* hide the header from every screen */}
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="SignIn" component={SignInScreen} />
          <Stack.Screen name="SignUp" component={SignUpScreen} />
          {/* <Stack.Screen name="NewPassword" component={NewPasswordScreen} /> */}
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
        {/* <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator> */}
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default Navigation;
