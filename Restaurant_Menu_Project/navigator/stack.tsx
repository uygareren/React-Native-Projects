import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryDetail from '../screens/stacks/CategoryDetail';
import CategoriesScreen from '../screens/CategoriesScreen';

const Stack = createNativeStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="CategoriesScreen" component={CategoriesScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CategoryDetail" component={CategoryDetail} options={{headerTitle: ""}}/>
      </Stack.Navigator>
  );
}

