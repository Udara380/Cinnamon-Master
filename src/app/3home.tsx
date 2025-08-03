import React, { useEffect } from "react";
import { StatusBar, SafeAreaView, StyleSheet, View, Alert, Platform } from "react-native";
import * as SystemUI from "expo-system-ui";
import Bottomnav from "@/src/components/bottomnavigator";
import MenuButton from "@/src/components/menu";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login1 = () => {
  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");

     const loadUser = async () => {
    const userData = await AsyncStorage.getItem('user');
    if (userData) {
      const { email } = JSON.parse(userData);
      // Use email to fetch items/orders from Firebase
    }
  };

  loadUser();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="red" barStyle="dark-content" />
      <View style={{ flex: 1 }}>
        <Bottomnav />
        <MenuButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: -StatusBar.currentHeight,
    backgroundColor: "#EEEEEE",
  },
});

export default Login1;
