import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, Switch } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Imageup from "@/src/components/image";
import Backbutton from "@/src/components/backbutton";
import styles from '@/src/styles/9setting';


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
      {/* <Menu /> */}
      
      <View style={styles.container}>
        <Text style={styles.text1}>ieliSï</Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.text2}>oekqï§ï</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#F26B1D" }} 
          thumbColor={isEnabled ? "#ffffff" : "#f4f3f4"} 
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
        />
      </View>
        

        

        

        

      
     
    </SafeAreaView>
  );
};

export default Login1;
