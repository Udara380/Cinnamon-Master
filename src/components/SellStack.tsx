// src/app/SellStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SellScreen from '@/src/app/13sell';  
import PostAddScreen from '@/src/app/14postadd';
import MyAdds from '@/src/app/15myadds';
import Details from '@/src/app/16detils';
import OrderDetails from '@/src/app/18orderdetails'; 

const Stack = createNativeStackNavigator();

const SellStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SellMain" component={SellScreen} />
      <Stack.Screen name="PostAdd" component={PostAddScreen} />
      <Stack.Screen name="MyAdds" component={MyAdds} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="OrderDetails" component={OrderDetails} />
    </Stack.Navigator>
  );
};

export default SellStack;
