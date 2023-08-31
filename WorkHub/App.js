import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomepageScreen from './pages/HomepageScreen';
import JobDetailScreen from './pages/JobDetailScreen';
import FavoritesJobScreen from './pages/drawers/FavoritesJobScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator initialRouteName="HomepageScreen">
      <Drawer.Screen
        name="HomepageScreen"
        component={HomepageScreen}
        options={{ title: 'Jobs', headerTitleAlign: 'center', headerTintColor: "#EF5350" }}
      />
      <Drawer.Screen
        name="FavoritesJobScreen"
        component={FavoritesJobScreen}
        options={{ title: 'Favorites Jobs', headerTitleAlign: 'center', headerTintColor: "#EF5350" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }} // This will disable the function header
        />
        <Stack.Screen
          name="JobDetailScreen"
          component={JobDetailScreen}
          options={{title: "Detail"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
