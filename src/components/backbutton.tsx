import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Ionicons name="chevron-back" size={35} color="#fff" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",  // Fixed position
    top: height*0.108,  
    left: width*0.06,  
    zIndex: 10, // Keep it above other elements
  },
});

export default BackButton;
