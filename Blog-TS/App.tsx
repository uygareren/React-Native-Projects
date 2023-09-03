import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomepageScreen from './pages/HomepageScreen';
import AddBlogScreen from './pages/AddBlogScreen';
import BlogDetailScreen from './pages/BlogDetailScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomepageScreen" component={HomepageScreen} options={({ navigation }) => ({
          headerTitle : "Blog",
          headerRight : () => (
            <View style={styles.iconContainer}>
              <AntDesign name="pluscircleo" size={24} color="black" onPress={() => navigation.navigate("AddBlogScreen")} />
            </View>
          )
        })}/>
        <Stack.Screen name='AddBlogScreen' component={AddBlogScreen}/>
        <Stack.Screen name='BlogDetailScreen' component={BlogDetailScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    marginRight: 15, 
  },
});
