/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Login from './src/screen/login';
import Signup from './src/screen/signup';
import MyStack from './src/screen/mainstack';
import Addproduct from './src/screen/addproduct';
const App=()=> {
  

  return (
    <SafeAreaView style={{flex:1}} >
  
    <Login/>
     
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  
});

export default App;
