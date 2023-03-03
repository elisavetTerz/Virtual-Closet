import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  Button,
} from "react-native";
import React, { useState, useEffect, useCallback } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import * as SplashScreen from "expo-splash-screen";
import Logo from "../../assets/images/background/wardrobe.jpeg";
import Wardrobe_gif from "../../assets/images/gif/wardrobe.gif";
import Calendar_gif from "../../assets/images/gif/calendar.gif";
import Suitcase_gif from "../../assets/images/gif/suitcase.gif";
import Magazine_gif from "../../assets/images/gif/magazine.gif";

const HomeScreen = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [token, setToken] = useState(null);
  const [appIsReady, setAppIsready] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        debugger;
        if (!token) {
          setIsLoggedIn(false);
        } else {
          axios.defaults.headers.common["Authorization"] = token;
          const response = await axios.post(`${URL}/users/verify_token`);
          fetchData();
          setUserId(id);
          return response.data.ok ? login(token) : logout();
        }
      } catch (error) {
        console.warn(error);
      } finally {
        setAppIsready(true);
      }
    }
    prepare();
  }, [token]);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady === true) {
      // This tells the splash screen to hide immediately on appis ready change
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const fetchData = async () => {
    try {
      const value = await AsyncStorage.getItem("token");
      if (value) {
        setToken(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const storeData = async (data) => {
    try {
      await AsyncStorage.setItem("token", data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteData = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setToken(null);
    } catch (error) {
      console.log(error);
    }
  };
  //THIS FUNCTION IS CALLED WHEN WE LOG IN AND IT CALLS STORE DATA ITSELF
  const keepUserIn = (token) => {
    storeData(token);
    setIsLoggedIn(true);
  };
  // delete token from the storage when user logs out
  const logout = () => {
    deleteData();
    setIsLoggedIn(false);
  };

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <View style={styles.logo_cotainer}>
        <ImageBackground source={Logo} style={[styles.logo]} resizeMode="cover">
          <Text style={{ fontSize: 24, alignSelf: "center" }}>
            Home, sweet home
          </Text>
        </ImageBackground>
      </View>
      <View style={styles.gif_cotainer}>
        <Image
          source={Wardrobe_gif}
          style={[styles.gif]}
          resizeMode="contain"
        />
        <Image
          source={Magazine_gif}
          style={[styles.gif]}
          resizeMode="contain"
        />
        <Image
          source={Suitcase_gif}
          style={[styles.gif]}
          resizeMode="contain"
        />
        <Image
          source={Calendar_gif}
          style={[styles.gif]}
          resizeMode="contain"
        />
      </View>
      <View style={styles.navbar_cotainer}></View>
      <Button onPress={logout} title="Log out" color="#841584" />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
  },
  logo_cotainer: {
    backgroundColor: "#ee82ee",
    flex: 2,
  },
  logo: {
    flex: 1,
    justifyContent: "center",
  },
  gif_cotainer: {
    backgroundColor: "#40e0d0",
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
    flexWrap: "wrap",
  },
  gif: {
    width: 120,
    height: 120,
    marginBottom: 30,
  },
  navbar_cotainer: {
    flex: 0.5,
    backgroundColor: "#ee82ee",
  },
});
