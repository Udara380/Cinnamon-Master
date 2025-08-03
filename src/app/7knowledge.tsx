import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Imageup from "@/src/components/image";
import Backbutton from "../components/backbutton";
import styles from '@/src/styles/7knowledge';
import { sinhalaParagraph } from '@/src/content/sinhalaContent';
import { temp } from '@/src/content/temp';
import { altitude } from '@/src/content/altitude';
import { humidity } from "../content/humidity";
import { soil } from "../content/soil";
import { ground } from "../content/ground";
import { upakarana } from "../content/upakarana";


const Login1 = () => {
  const navigation = useNavigation();


  useEffect(() => {
    SystemUI.setBackgroundColorAsync("#ffffff");
  }, []);

  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Imageup />
      <Backbutton />
      
      <View style={styles.container}>
        <Text style={styles.text1}>oekqu</Text>
      </View>
    
    <ScrollView contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView} >
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> b;sydih </Text>
        <View style={styles.line} />
      </View>

      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {sinhalaParagraph}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> mdßißl idOl </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>WIaK;ajh</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {temp}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>Wkak;dxYh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {altitude}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>wd¾ø;djh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {humidity}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>mi </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {soil}</Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> N+ñh fhda.H fkdjk wjia:d  </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {ground}</Text>
      </View>
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> l=re÷ ieliSug .kakd WmlrK </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {upakarana}</Text>
      </View>
    </View>
    </ScrollView>
     
    </SafeAreaView>
  );
};

export default Login1;
