import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'react-native';

import CategoryDetail from './pages/CategoryDetail';
import Categories from './pages/categories';
import MealDetail from './pages/MealDetail';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={{
            statusBarColor: "#FFA500",
            headerTintColor: "#FFA500",
            statusBarStyle: "dark-content",
            headerTitleAlign: 'center', // Center-align header title
          }}
        />
        <Stack.Screen
          name="CategoryDetail"
          component={CategoryDetail}
          options={{
            statusBarColor: "#FFA500",
            title: "Meals", // Set the title for the screen
            headerTintColor: "#FFA500",
            statusBarStyle: "dark-content",
            headerTitleAlign: 'center', // Center-align header title
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetail}
          options={{
            statusBarColor: "#FFA500",
            title: "Detail", // Set the title for the screen
            headerTintColor: "#FFA500",
            statusBarStyle: "dark-content",
            headerTitleAlign: 'center', // Center-align header title
            headerBackTitle: "Meals", // Set the back button title
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
