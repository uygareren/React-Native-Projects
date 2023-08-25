import { Button, Dimensions, StyleSheet, Text, View, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import Input from '../../components/login/Input';
import { Formik } from 'formik';
import * as Yup from 'yup'; 
import usePost from '../../hooks/usePost/usePost';
import { AxiosError } from 'axios';


export default function Login({navigation}) {

  const {error, loading, data, post} = usePost();
  
  const LOGIN_URL = 'https://fakestoreapi.com/auth/login';

  const handleLogin = (values) => {
    post(LOGIN_URL, values);
  }
  
  
  if(data.token){
    navigation.navigate("Product");
  }
  
  // Yup doğrulama şemasını oluşturduk

  const validationSchema = Yup.object().shape({
    password: Yup.string().required('Password is required'),
  });

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>Dükkan</Text>
      </View>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema} 
        onSubmit={values => handleLogin(values)} // Corrected here
      >
        {({ handleChange, handleSubmit, values, errors, touched }) => (
          <View style={styles.inputContainer}>
            <Input
              placeholder="Please Enter Username!"
              onChangeText={handleChange('username')}
              value={values.username}
              type = {"username"}
            />
           
            <Input
              placeholder="Please Enter Password!"
              onChangeText={handleChange('password')}
              value={values.password}
              type = {"password"}
              secureTextEntry
            />
            {touched.password && errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}
            <View style={styles.buttonContainer}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
                disabled={loading} 
                >
                {loading ? (<ActivityIndicator color={"white"}/>) : <Text style={styles.buttonText}>Login</Text> }
            </TouchableOpacity>

            </View>
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

const deviceSize = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontSize: 30,
    fontWeight: '600',
  },
  inputContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  buttonContainer: {
    marginTop: 15,
    width: '25%',
  },
  button: {
    backgroundColor: '#186ded',
    height: 50,
    width: deviceSize.width / 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  errorText: {
    color: 'red',
    marginTop: 5,
  }
});
