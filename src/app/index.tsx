// /src/screens/Index.js
import React, { useEffect } from "react";
import {
  Text,
  ImageBackground,
  View,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
} from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from "expo-font";
import styles from "@/src/styles/1indexstyles";
import { useNavigation } from "@react-navigation/native";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import auth from '@react-native-firebase/auth';

const Index = () => {
  const [fontsLoaded, fontError] = useFonts({
    Poppins: require("@/assets/fonts/Poppins-Bold.ttf"),
    Aclonica: require("@/assets/fonts/Aclonica.ttf"),
    apex: require("@/assets/fonts/apex30.ttf"),
    Emanee: require("@/assets/fonts/4u-Emanee.ttf"),
  });

  const navigation = useNavigation();

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("transparent");
  }, []);

  useEffect(() => {
    if (fontsLoaded || fontError) {
      const checkUserAndNavigate = async () => {
        try {
          const firebaseUser = auth().currentUser;
          if (firebaseUser) {
            const userInfo = {
              name: firebaseUser.displayName || "",
              email: firebaseUser.email || "",
              photoUrl: firebaseUser.photoURL || "",
            };
            // await AsyncStorage.setItem("user", JSON.stringify(userInfo));
            // Wait splash time (4s) then navigate to home
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: "3home", params: userInfo }],
              });
            }, 4000);
          } else {
            const localUser = await AsyncStorage.getItem("user");
            setTimeout(() => {
              navigation.reset({
                index: 0,
                routes: [{ name: localUser ? "3home" : "2login" }],
              });
            }, 4000);
          }
        } catch (error) {
          // On error, fallback to login screen
          setTimeout(() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "2login" }],
            });
          }, 4000);
        }
      };

      checkUserAndNavigate();
    }
  }, [fontsLoaded, fontError, navigation]);

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#000",
        }}
      >
        <Text style={{ color: "white", fontSize: 18 }}>Loading Fonts...</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require("@/assets/images/cinnaman.jpg")}
        style={styles.image}
        resizeMode="cover"
      >
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="light-content"
        />
        <View style={styles.textContainer}>
          <Text
            style={[
              styles.text1,
              fontsLoaded ? { fontFamily: "Aclonica" } : {},
            ]}
          >
            CINNAMON
          </Text>
          <Text
            style={[
              styles.text2,
              fontsLoaded ? { fontFamily: "Aclonica" } : {},
            ]}
          >
            MASTER
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            bottom: 50,
            left: 0,
            right: 0,
            alignItems: "center",
          }}
        >
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Index;
