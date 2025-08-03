import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { useFonts } from 'expo-font';

const CinnamonMasterText = () => {

  const [fontsLoaded] = useFonts({
      'Aclonica': require('@/assets/fonts/Aclonica.ttf'), 
    });
  return (
    <View style={styles.text}>
      <Text style={styles.text1}>CINNAMON</Text>
      <Text style={styles.text2}>MASTER</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",  // Fixed position
    top: '150',   
    zIndex: 10, // Keep it above other elements 
    width: '100%',
    alignItems: 'center',
  },
  text1: {
    fontFamily: "Aclonica",
    color: "#ffffff", // White color for text
    fontSize: 40, // Adjust the size of text // Centers text horizontally
  },
  text2: {
    fontFamily: "Aclonica",
    color: "#ffffff", // White color for text
    fontSize: 53, // Adjust the size of text
  },
});

export default CinnamonMasterText;
