import * as React from 'react';
// import { StatusBar } from 'expo-status-bar';
// import { Camera, CameraType } from 'expo-camera';
// import { useState } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createAppContainer } from "react-navigation";
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import Navigation from './src/navigation/';

// If you're on a Mac and developing for iOS, you need to install the pods (via Cocoapods) to complete the linking:
// npx pod-install ios
export default function App() {
  return (
    <SafeAreaView style={styles.root}>
      <Navigation />
    </SafeAreaView>
    //     <View style={styles.container}>
    //       <Text style={styles.appTitle}>Smart Closet</Text>
    //       <StatusBar style="auto" />
    //       <NavigationContainer>
    //         <Tab.Navigator
    //           screenOptions={({ route }) => ({
    //             tabBarIcon: ({ focused, color, size}) => {
    //               let iconName;
    //               if (route.name === "Home") {
    //                 iconName = focused
    //                 ? 'ios-home-sharp'
    //                 : 'ios-home-outline';
    //               } else if (route.name === "Profile") {
    //                 iconName = focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline';
    //               } else if (route.name === "Closet") {
    //                 iconName = focused ? 'ios-person-circle-sharp' : 'ios-person-circle-outline';
    //               }
    //               return <Ionicons name={iconName} size={size} color={color} />;
    //             },
    //             tabBarActiveTintColor: 'tomato',
    //             tabBarInactiveTintColor: 'gray',
    //           })}    
    //         >
    //           <Tab.Screen name="Home" component={HomeStack} options={{tabBarLabel: 'Home'}}/>
    //           <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarLabel: 'Profile'}}/>
    //         </Tab.Navigator> 
    //       </NavigationContainer>
    //     </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#b0e0e6",
  },
});

