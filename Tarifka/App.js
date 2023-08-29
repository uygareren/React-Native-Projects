import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetail from './pages/CategoryDetail';
import Categories from './pages/categories';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Categories" component={Categories} options={{headerTintColor: "#FFA50" }} />
      <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{headerTintColor: "#FFA50" }} />
      <Stack.Screen name="MealDetail" component={MealDetail} options={{headerTintColor: "#FFA50" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
