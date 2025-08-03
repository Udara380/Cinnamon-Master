import React, { useState, useEffect } from "react";
import {
  Text, View, StatusBar, SafeAreaView, TouchableOpacity,
  Image, ScrollView, KeyboardAvoidingView,
  Keyboard, TouchableWithoutFeedback, Platform
} from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { getAuth, signOut } from 'firebase/auth';
import { Alert } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import Imageup from "../components/image";
import Backbutton from "../components/backbutton";
import styles from '../styles/10profile';

const Login1 = () => {
  const navigation = useNavigation();

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [profilePic, setProfilePic] = useState(null);

  const [fontsLoaded] = useFonts({
    "4u-emanee": require("@/assets/fonts/4u-Emanee.ttf"),
  });

  useEffect(() => {
    (async () => {
      await SystemUI.setBackgroundColorAsync("#ffffff");
    })();

    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
      setUserName(user.displayName || "");
      setUserEmail(user.email || "");
      setProfilePic(user.photoURL);
    }
  }, []);

  const handleSignOut = () => {
    Alert.alert(
      "Log Out",
      "ඔබට මෙම ගිණුමෙන් පිටවීමට අවශ්‍යද?",
      [
        {
          text: "නැහැ",
          style: "cancel"
        },
        {
          text: "ඔව්",
          onPress: async () => {
            try {
              const auth = getAuth();
              await signOut(auth);

              // ✅ Clear user data from AsyncStorage
              // await AsyncStorage.removeItem('user');

              navigation.navigate('index');
            } catch (error) {
              console.log('Sign out error:', error);
            }
          }
        }
      ],
      { cancelable: true }
    );
  };

  if (!fontsLoaded) return null;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.safeArea}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
            <Imageup />
            <Backbutton />

            <View style={styles.container}>
              <Text style={styles.text1}>.sKqu</Text>
            </View>

            <View style={styles.container1}>
              <Image
                source={profilePic ? { uri: profilePic } : require('@/assets/images/profile.png')}
                style={styles.profileImage}
              />
              <Text style={styles.text2}>wdhqfndajka</Text>
              <Text style={styles.text3}>{userName ? userName : (userEmail ? userEmail : "User")}</Text>
            </View>

            <View style={styles.formContainer}>
              <TouchableOpacity style={styles.signoutButton} onPress={handleSignOut}>
                <Text style={[styles.signoutButtonText, { fontFamily: "4u-emanee" }]}>msgfjkak</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Login1;
