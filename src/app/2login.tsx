// /src/screens/Login1.js
import React from "react";
import {
  Text,
  ImageBackground,
  View,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import * as SystemUI from "expo-system-ui";
import styles from "@/src/styles/2loginstyles";
import { useFonts } from "expo-font";
import Cinnamon from "@/src/components/cinnamon";
import { useNavigation, CommonActions } from "@react-navigation/native"; // ✅ CommonActions imported
import { signInWithGoogle } from "@/src/components/signin";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Login1 = () => {
    const [fontsLoaded, fontError] = useFonts({
      Poppins: require("@/assets/fonts/Poppins-Bold.ttf"),
    });

  const navigation = useNavigation();

  React.useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");
  }, []);

  const handleGoogleSignIn = async () => {
    try {
      const user = await signInWithGoogle();

      const name = user.displayName || user.email || "User";
      const email = user.email || "";
      const photoUrl = user.photoURL || null;

    // ✅ Save user to AsyncStorage
    // const userInfo = { name, email, photoUrl };
    // await AsyncStorage.setItem('user', JSON.stringify(userInfo));


      Alert.alert("ආයුබෝවන්", `Hello ${name}!`);

      // ✅ Reset the navigation stack so login screen is removed
      navigation.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "3home",
              params: { name, email, photoUrl },
            },
          ],
        })
      );

    } catch (error) {
      Alert.alert("Login Error", error.message);
    }
  };



  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Cinnamon />
      <ImageBackground source={require("@/assets/images/Vector 3.png")} style={styles.image}>
        <Cinnamon />
      </ImageBackground>
      <View style={styles.imgcontainer}>
        <Image source={require("@/assets/images/login.png")} style={styles.login} resizeMode="contain" />
      </View>
      <View style={styles.formContainer}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleGoogleSignIn}
          activeOpacity={0.7}
        >
          <View style={styles.buttonContent}>
            <Image source={require("@/assets/images/google.png")} style={styles.buttonIcon} resizeMode="contain" />
            <Text style={styles.loginButtonText}>.+.,a .sKqu yryd we;=¿ jkak</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login1;
