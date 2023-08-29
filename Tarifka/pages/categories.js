import { StatusBar } from 'expo-status-bar';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryComponent from '../components/CategoryComponent';
import useFetch from '../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';


export default function Categories() {

  const navigation = useNavigation(); // navigation nesnesini elde et


  const {data, fetchData} = useFetch();
  const CATEGORİES_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";


  useEffect(() => {
    fetchData(CATEGORİES_URL);
  }, [])

  const renderCategories = ({item}) => {
    return <CategoryComponent id={item.idCategory} categoryName={item.strCategory} image={item.strCategoryThumb} navigation={navigation} />;
  };
  
  

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <FlatList
        data={data.categories}
        renderItem={renderCategories}
        keyExtractor={(item) => item.idCategory} 
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFA500',
      },
})