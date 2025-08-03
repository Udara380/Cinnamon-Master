import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, SafeAreaView, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from '@/src/app/4home1';  
import Market from '@/src/app/6market1'; 
import Guide from '@/src/app/8guide';
import Knowledge from '@/src/app/7knowledge';
import Webview from '@/src/app/webview';
import { Feather } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05; 
const fontSize = width * FONT_SIZE_PERCENTAGE;

const BottomTabNavigator = () => {

  const [fontsLoaded] = useFonts({
    '4u-emanee': require('@/assets/fonts/4u-Emanee.ttf'), 
  });

  if (!fontsLoaded) return null;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* Main Content Area */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarHideOnKeyboard: true,
            headerStyle: {
              height: 58,
            },
            headerTitleStyle: false,
            tabBarIcon: ({ color }) => {
              let iconName;

              if (route.name === 'uq,a msgqj') {
                iconName = 'home';
              } else if (route.name === 'fj<|fmd<') {
                iconName = 'shopping-cart';
              } else if (route.name === 'u. fmkaùï') {
                iconName = 'clipboard';
              } else if (route.name === 'oekqu') {
                iconName = 'book-open';
              } else if (route.name === "ñ,") {
                iconName = 'dollar-sign';
              }

              return <Feather name={iconName} size={30} color={color} />;
            },
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: 'black',
            tabBarStyle: { 
              backgroundColor: '#F26B1D', 
              height: height * 0.1, 
              paddingBottom: height * 0.01,  
              position: 'absolute', 
              bottom: 0, 
              left: 0,  
              right: 0, 
              zIndex: 100, 
              borderTopWidth: 0, 
            },
            tabBarLabelStyle: { 
              fontSize: fontSize * 0.7, 
              fontFamily: '4u-emanee', 
              marginTop: height * 0.004,
            },
            tabBarIconStyle: { 
              marginTop: height * 0.01, 
              marginBottom: 0, 
              justifyContent: 'center', 
              width: '100%', 
              height: height * 0.04, 
            },
          })}
        >
          <Tab.Screen name="uq,a msgqj" component={HomeScreen} />
          <Tab.Screen name="fj<|fmd<" component={Market} />
          <Tab.Screen name="oekqu" component={Knowledge} />
          <Tab.Screen name="u. fmkaùï" component={Guide} />
          <Tab.Screen name="ñ," component={Webview} />
        </Tab.Navigator>
      </View>
    </SafeAreaView>
  );
};

export default BottomTabNavigator;
