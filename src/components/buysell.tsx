// src/components/buysell.tsx
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { ActivityIndicator, View, Dimensions } from 'react-native';
import { useFonts } from 'expo-font';
import HomeScreen from '@/src/app/12buy';
import SellStack from '@/src/components/SellStack';
import BuyStack from '@/src/components/BuyStack';

const Tab = createMaterialTopTabNavigator();

const { width, height } = Dimensions.get('window');
const FONT_SIZE_PERCENTAGE = 0.05;
const fontSize = width * FONT_SIZE_PERCENTAGE;

const TopTabNavigator = () => {
  const [fontsLoaded] = useFonts({
    '4u-emanee': require('@/assets/fonts/4u-Emanee.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
        <ActivityIndicator size="large" color="#EF7011" />
      </View>
    );
  }

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#000',
        tabBarStyle: {
          height: height*0.06,
        },
        tabBarLabelStyle: {
          fontSize: fontSize,
          fontFamily: '4u-emanee',
        },
        tabBarItemStyle: {
          justifyContent: 'center',
        },
        tabBarIndicatorStyle: {
          backgroundColor: '#EF7011', // 🔥 active tab underline color
          height: height*0.008,                 // underline thickness
          borderRadius: 2,          // optional rounded underline
        },
        tabBarIndicatorContainerStyle: {
          backgroundColor: '#fff', // 👈 background stays same
        },
      }}
    >
      <Tab.Screen name="ñ,g .kak" component={BuyStack} />
      <Tab.Screen name="úl=Kkak" component={SellStack} />
    </Tab.Navigator>
  );
};

export default TopTabNavigator;
