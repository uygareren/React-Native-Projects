import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomepageScreen from './pages/HomepageScreen';
import { Provider } from 'react-redux';
import Store from "./redux/Store"

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="HomepageScreen" component={HomepageScreen} options={{headerShown : false}}/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  
});
