import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Imageup from "@/src/components/image";
import Backbutton from "@/src/components/backbutton";
import styles from '@/src/styles/11aboutus';


const Login1 = () => {
  const navigation = useNavigation();


  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Imageup />
      <Backbutton />
      {/* <Menu /> */}
      
      <View style={styles.container}>
        <Text style={styles.text1}>wms .ek</Text>
      </View>

      <View style={styles.container1}>
        <Text style={styles.text2}>{"Y%S chj¾Okmqr úYajúoHd,fha\" udkjYdia;% yd iudÔhúoHd mSGfha\" iudc ixLHdk wOHhkdxYfha\" f;dr;=re ;dlaIK Wmdêhg wod< isõjk jir wjika jHdmD;sh hgf;a ù'Ô Wodr iïm;a jk ud úiska isÿlrk ,o jHdmD;shls'"}</Text>
      </View>
        

        

        

        

      
     
    </SafeAreaView>
  );
};

export default Login1;
