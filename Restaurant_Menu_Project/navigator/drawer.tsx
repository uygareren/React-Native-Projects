import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from '../screens/FavoritesScreen';
import MyStack from './stack';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="MyStack" component={MyStack} options={{headerShown: false}}/>
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{headerTitle: "Favoriler"}}/>
    </Drawer.Navigator>
  );
}

