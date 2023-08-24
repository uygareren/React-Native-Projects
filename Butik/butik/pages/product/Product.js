import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';


export default function Product({navigation}) {
  const URL = "https://fakestoreapi.com/products";

  const {error, loading, data} = useFetch(URL);


  if(error){
    return <Error/>;
  }

  if(loading){
    return <Loading/>;
  }

  const handleProductDetail = (id) => {
    navigation.navigate("ProductDetail", {id});
  }

  const renderProducts = ({item}) => {
    return <ProductCard product = {item} onselect = {() => handleProductDetail(item.id)}/>
  }
  

  return (
    <View style={styles.container}>
      <FlatList
      data={data}
      renderItem={renderProducts}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  
})
