import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  Animated,
  BackHandler,
  Text,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { getAuth, signOut } from "firebase/auth";
// import AsyncStorage from '@react-native-async-storage/async-storage';

const { width, height } = Dimensions.get("window");
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const MenuButton = () => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const slideAnim = useRef(new Animated.Value(width * 0.7)).current;

  const toggleMenu = () => {
    if (menuVisible) {
      Animated.timing(slideAnim, {
        toValue: width * 0.7,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setMenuVisible(false));
    } else {
      setMenuVisible(true);
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  useEffect(() => {
    const backAction = () => {
      if (menuVisible) {
        toggleMenu();
        return true;
      }
      return false;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );
    return () => backHandler.remove();
  }, [menuVisible]);

  const handleSignOut = () => {
    Alert.alert(
      "Log Out",
      "ඔබට මෙම ගිණුමෙන් පිටවීමට අවශ්‍යද?", // Message
      [
        {
          text: "නැහැ",
          style: "cancel",
        },
        {
          text: "ඔව්",
          onPress: async () => {
            try {
              const auth = getAuth();
              await signOut(auth);
              // await AsyncStorage.removeItem('user'); // Clear AsyncStorage on logout
              navigation.replace("index"); // Replace navigation stack with index screen
            } catch (error) {
              console.log("Sign out error:", error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Feather name="menu" size={35} color="white" />
      </TouchableOpacity>

      {menuVisible && (
        <View style={styles.overlayContainer}>
          {/* Backdrop */}
          <TouchableOpacity style={styles.backdrop} onPress={toggleMenu} />

          {/* Menu Content */}
          <Animated.View
            style={[styles.menuContainer, { transform: [{ translateX: slideAnim }] }]}
          >
            <Text style={styles.titleText}>Cinnamon Master</Text>

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("10profile")}
            >
              <Feather name="user" size={24} color="black" />
              <Text style={styles.menuText}>.sKqu</Text>
            </TouchableOpacity>

            {/* Uncomment if you want settings menu item */}
            {/* <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("9setting")}
            >
              <Feather name="settings" size={24} color="black" />
              <Text style={styles.menuText}>ieliqï</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigation.navigate("11aboutus")}
            >
              <Feather name="book-open" size={24} color="black" />
              <Text style={styles.menuText}>wms .ek</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.signoutButton} onPress={handleSignOut}>
              <Text style={styles.signoutText}>msgjkak</Text>
              <Feather name="chevron-right" size={24} color="#fff" />
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  overlayContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height,
    zIndex: 999,
    elevation: 999,
  },
  menuButton: {
    position: "absolute",
    top: height * 0.108,
    right: width * 0.06,
    zIndex: 1000,
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    width,
    height: height * 1.1,
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 998,
  },
  menuContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: width * 0.7,
    height: height * 1.1,
    backgroundColor: "#ffffff",
    paddingTop: height * 0.1,
    paddingLeft: width * 0.08,
    zIndex: 1001,
    elevation: 1001,
    shadowColor: "#000",
    shadowOffset: { width: -3, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  titleText: {
    fontSize: fontSize * 2,
    fontWeight: "bold",
    color: "#EF7011",
    marginBottom: height * 0.04,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: height * 0.02,
  },
  menuText: {
    fontFamily: "4u-emanee",
    marginLeft: width * 0.04,
    fontSize: fontSize * 1.1,
    color: "#000",
  },
  signoutButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: height * 0.4,
    backgroundColor: "#F26B1D",
    padding: height * 0.02,
    borderRadius: 8,
    alignItems: "center",
    width: "80%",
  },
  signoutText: {
    left: width * 0.02,
    color: "#fff",
    fontSize: fontSize * 1,
    fontFamily: "4u-emanee",
  },
});

export default MenuButton;
