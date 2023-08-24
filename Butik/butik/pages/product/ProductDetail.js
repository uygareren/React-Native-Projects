import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


export default function ProductDetail({route}) {
  const id = route.params.id;
  const URL = "https://fakestoreapi.com/products"+"/"+id;
  console.log(URL)
  const {error, loading, data} = useFetch(URL);

  if(error){
    return <Error/>;
  }

  if(loading){
    return <Loading/>
  }

  
  return (
    <View style = {styles.container}>
      <Image source={{uri: data.image}} style={styles.image}/>
      <Text style = {styles.title}>{data.title}</Text>
      <Text style = {styles.description}>{data.description}</Text>
      <Text style = {styles.price}>{data.price} $</Text>
    </View>
  )
}


const deviceSize = Dimensions.get('window')

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 20
  },  
  image:{
    width: deviceSize.width,
    height: deviceSize.height/3,
    resizeMode: 'contain',
    backgroundColor: "white"
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    marginTop: 20
  },
  description: {
    fontSize :  16,
    marginTop: 20,
    marginBottom: 30,
    marginHorizontal: 20,
  },
  price:{
    fontSize: 25,
    fontWeight: '800'
  }
})