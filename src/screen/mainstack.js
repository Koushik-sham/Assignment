
import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from './signup';
import Login from './login';
import Addproduct from './addproduct';
const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Signup"
          component={Signup}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Addproduct" component={Addproduct} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default MyStack