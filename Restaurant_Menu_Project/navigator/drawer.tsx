import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoriesScreen from '../screens/CategoriesScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const Drawer = createDrawerNavigator();

export default function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="CategoriesScreen" component={CategoriesScreen} options={{headerTitle: "Tüm Kategoriler"}}/>
      <Drawer.Screen name="FavoritesScreen" component={FavoritesScreen} options={{headerTitle: "Favoriler"}}/>
    </Drawer.Navigator>
  );
}

