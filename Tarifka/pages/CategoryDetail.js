import { FlatList, StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import React, { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import { useNavigation } from '@react-navigation/native';

export default function CategoryDetail({ route }) {
    const navigation = useNavigation();

    const category_name = route.params.category_name;
    const { data, fetchData } = useFetch();

    const CATEGORY_DETAIL_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=" + category_name;

    const handleMealDetail = (id) => {
        navigation.navigate("MealDetail", {id})
    }
  
    useEffect(() => {
      fetchData(CATEGORY_DETAIL_URL);
    }, [CATEGORY_DETAIL_URL]);
  
    return (
      <FlatList
        data={data.meals}
        renderItem={({ item }) => (
          <TouchableWithoutFeedback onPress={() => handleMealDetail(item.idMeal)}>
            <View style={styles.container}>
              <View style={styles.cardContainer}>
                <Image style={styles.image} source={{ uri: item.strMealThumb }} />
                <View style={styles.titleArea}>
                  <Text style={styles.text}>{item.strMeal}</Text>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
        keyExtractor={(item) => item.idMeal}
      />
    );
  }
  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFA500",
      alignItems: 'center',
      paddingVertical: 20,
    },
    cardContainer: {
      backgroundColor: "white",
      width: "90%",
      height: 250,
      borderRadius: 20,
      marginVertical: 10,
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: 'cover',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    titleArea: {
      width: "100%",
      height: 50,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.3)', // Semi-transparent black background
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      fontSize: 22,
      fontWeight: '700',
      color: "white",
    },
  });
  
