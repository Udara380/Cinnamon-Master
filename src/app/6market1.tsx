import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, Switch, Dimensions } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Imageup from "@/src/components/image";
import Backbutton from "@/src/components/backbutton";
import styles from '@/src/styles/6market1';
import { NavigationContainer } from '@react-navigation/native';
import TopTabNavigator from '@/src/components/buysell';


const Login1 = () => {
  const navigation = useNavigation();


  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
    if (!isEnabled) {
      console.log("Notifications Enabled");
    } else {
      console.log("Notifications Disabled");
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Imageup />
      <Backbutton />
      
      <View style={styles.container}>
        <Text style={styles.text1}>{"fj<|fmd<"}</Text>
        
      </View>
      
      <View style={styles.container1}>
      <TopTabNavigator />
      </View>
    </SafeAreaView>
  );
};

export default Login1;
