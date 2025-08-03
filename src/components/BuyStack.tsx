// src/app/SellStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BuyScreen from '@/src/app/12buy';  
import Details from '@/src/app/16detils';
import OrderNow from '@/src/app/17ordernow';
import MyOrder from '@/src/app/19myorders';
import MyorderDetails from '@/src/app/20myorderdetails'


const Stack = createNativeStackNavigator();

const SellStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="BuyMain" component={BuyScreen} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="OrderNow" component={OrderNow} />
      <Stack.Screen name="MyOrder" component={MyOrder} />
      <Stack.Screen name="MyorderDetails" component={MyorderDetails} />
    </Stack.Navigator>
  );
};

export default SellStack;
