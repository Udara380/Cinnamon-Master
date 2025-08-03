import React, { useState, useEffect } from "react";
import { Text, View, StatusBar, SafeAreaView, Image, TouchableOpacity } from "react-native";
import * as SystemUI from "expo-system-ui";
import { useFonts } from 'expo-font';
import { useNavigation, useRoute } from "@react-navigation/native";
import Imageup from "@/src/components/image";
import styles from '@/src/styles/4home1style';
import Swiper from 'react-native-swiper';
import { getAuth } from 'firebase/auth';

const Login1 = () => {
  const navigation = useNavigation();
  const route = useRoute();
    const [profilePic, setProfilePic] = useState(null);

  const [profilePhoto, setProfilePhoto] = useState(null);

 useEffect(() => {
     (async () => {
       await SystemUI.setBackgroundColorAsync("#ffffff");
     })();
 
     // Firebase current user data ගන්නවා මෙහෙ
     const auth = getAuth();
     const user = auth.currentUser;
 
     if (user) {
       setProfilePic(user.photoURL);
     }
   }, []);

  useEffect(() => {
    if (route.params?.photoUrl) {
      console.log("📷 Received photoUrl:", route.params.photoUrl);
      setProfilePhoto(route.params.photoUrl);
    }
  }, [route.params]);

  return (
    <SafeAreaView style={styles.safeArea}> 
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
      <Imageup />
      
      <View style={styles.container}>
        <Text style={styles.text1}> CINNAMON</Text>
        <Text style={styles.text2}> MASTER</Text>

        <TouchableOpacity onPress={() => navigation.navigate('10profile')}>
              <Image
                source={profilePic ? { uri: profilePic } : require('@/assets/images/profile.png')}
                style={styles.image1}
              />
        </TouchableOpacity>
      </View>

      <View style={styles.container1}>
        <View style={styles.container2}>
          <Text style={styles.text3}>{"wdhqfndajka"}</Text>
          <Image source={require('@/assets/images/cinamon-man.png')} style={styles.image2} />
        </View>

        <View style={styles.swiperContainer}>
          <Swiper autoplay={true} autoplayTimeout={5} loop={true}>
            <Image source={require('@/assets/images/cinnamon1.png')} style={styles.image} />
            <Image source={require('@/assets/images/cinnamon2.jpg')} style={styles.image} />
            <Image source={require('@/assets/images/cinnamon3.png')} style={styles.image} />
            <Image source={require('@/assets/images/cinnamon4.png')} style={styles.image} />
          </Swiper>
        </View>

        <View style={styles.buttons}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("fj<|fmd<")} activeOpacity={0.7}>
              <Image source={require('@/assets/images/market.jpg')} style={styles.buttonImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('fj<|fmd<')}>
              <Text style={styles.buttonText}>{"fj<|fmd<"}</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('oekqu')} activeOpacity={0.7}>
              <Image source={require('@/assets/images/Knowledge.png')} style={styles.buttonImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('oekqu')}>
              <Text style={styles.buttonText}>oekqu</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('u. fmkaùï')} activeOpacity={0.7}>
              <Image source={require('@/assets/images/guide.jpg')} style={styles.buttonImage} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('u. fmkaùï')}>
              <Text style={styles.buttonText}>u. fmkaùï</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login1;
