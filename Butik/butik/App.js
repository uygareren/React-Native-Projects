import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Product from './pages/product/Product'
import ProductDetail from './pages/product/ProductDetail'
import Login from './pages/login/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={Login} 
          options={{
            headerShown: false 
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product} 
          options={{
            title: "Butik",
            headerStyle: { backgroundColor: "#1aa3e8" },
            headerTitleStyle: { color: "white" },
            headerTitleAlign: 'center',
            headerTintColor: "white", 
          
          }}
        />
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail} 
          options={{
            title: "Butik Detail",
            headerStyle: { backgroundColor: "#1aa3e8" },
            headerTitleStyle: { color: "white" },
            headerTitleAlign: 'center',
            headerTintColor: "white", 
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
