import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import store from './redux/Store';

import HomepageScreen from './pages/HomepageScreen';
import JobDetailScreen from './pages/JobDetailScreen';
import FavoritesJobScreen from './pages/drawers/FavoritesJobScreen';
import SubmittedJobsScreen from './pages/drawers/SubmittedJobsScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator
        screenOptions={{
          headerLeft: false, // This removes the default navigation icon
          drawerActiveTintColor: "#EF5350",
          drawerActiveBackgroundColor: "#FDEAEA",
          drawerInactiveTintColor: "#656566",
          drawerStyle: {
            backgroundColor: 'white',
            width: "70%",
            paddingTop: 50,
          
          },
        }}
        initialRouteName='HomepageScreen'
      >
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
      <Drawer.Screen
        name="SubmittedJobsScreen"
        component={SubmittedJobsScreen}
        options={{ title: 'Submitted Jobs', headerTitleAlign: 'center', headerTintColor: "#EF5350" }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Root"
            component={Root}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="JobDetailScreen" component={JobDetailScreen} options={{ title: "Detail" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
