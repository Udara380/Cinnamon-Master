import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import Imageup from "@/src/components/image";
import Backbutton from "../components/backbutton";
import styles from '@/src/styles/8guide';
import { sinhalaParagraph } from '@/src/content/sinhalaContent';
import { field } from '@/src/content/field';
import { plant} from '@/src/content/plant';
import { plant1 } from "../content/plant1";
import { soil1 } from "../content/soil1";
import { seed } from "../content/seed";
import { how } from "../content/how";
import { geta } from "../content/geta";
import { thelima } from "../content/thelima";
import { wiyalima } from "../content/wiyalima";
import { sandi } from "../content/sandi";

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
        <Text style={styles.text1}>uÕ fmkaùï</Text>
      </View>

    <ScrollView contentContainerStyle={styles.scrollContainer}
          style={styles.scrollView} >
    <View style={styles.maincontainer}>
      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> l=re÷ j.d lsÍu </Text>
        <View style={styles.line} />
      </View>

      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>lafIa;%h ieliSu</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {field}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>l=re÷ j.dj i|yd ks¾foaYs; mr;r iy me, isgqùu </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {plant}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>me&lt; isgqùu</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {plant1}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>l=re÷ j.dfõ mdxY= fmdaIl l&lt;ukdlrKh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {soil1}</Text>
      </View>

      <View style={styles.container1}>
        <View style={styles.line} />
        <Text style={styles.knowledgetext1}> miq wiajkq ;dlaIKh </Text>
        <View style={styles.line} />
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>wiajkq fk,Su </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {seed}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>wiajkq fk,k wdldrh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {how}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>.eg mEysu iy l=reÜg iSÍu </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {geta}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>l=re÷ fmd;= .,jd .kakd wdldrh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {thelima}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>fmd;= úh&lt;d .; hq;= wdldrh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {wiyalima}</Text>
      </View>
      <View style={styles.subcontainer}>
        <Text style={styles.knowledgetext3}>ikaê lrk wdldrh </Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.knowledgetext2}> {sandi}</Text>
      </View>
    </View>
    </ScrollView>
        

        

        

        

      
     
    </SafeAreaView>
  );
};

export default Login1;
