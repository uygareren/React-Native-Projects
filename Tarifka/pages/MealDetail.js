import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Linking } from 'react-native';
import React, { useEffect, useState } from 'react';
import useFetch from '../hooks/useFetch';
import { StatusBar } from 'expo-status-bar';

export default function MealDetail({ route }) {
  const { id } = route.params;

  const { data, fetchData } = useFetch();
  const [mealDetails, setMealDetails] = useState(null);

  const MEAL_DETAIL_URL = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id;

  useEffect(() => {
    fetchData(MEAL_DETAIL_URL);
  }, [MEAL_DETAIL_URL]);

  useEffect(() => {
    if (data.meals && data.meals.length > 0) {
      setMealDetails(data.meals[0]);
    }
  }, [data.meals]);

  const handleWatchYoutube = () => {
    if (mealDetails && mealDetails.strYoutube) {
      Linking.openURL(mealDetails.strYoutube);
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        {mealDetails ? (
          <View>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: mealDetails.strMealThumb }} />
            </View>
            <View style={styles.titleArea}>
              <Text style={styles.title}>{mealDetails.strMeal}</Text>
              <Text style={styles.countryText}>{mealDetails.strArea}</Text>
            </View>
            <View style={styles.descriptionArea}>
              <Text style={styles.descriptionText}>{mealDetails.strInstructions}</Text>
            </View>
            <TouchableOpacity style={styles.buttonArea} onPress={handleWatchYoutube}>
              <Text style={styles.buttonText}>Watch on Youtube</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  imageContainer:{
    width: "100%",
    height: 400,
    alignItems: 'center',
    marginBottom: 20,
    
  },
  image:{
    width: "95%",
    height: "100%",
    resizeMode: 'contain'
  },
  titleArea:{
    alignItems: 'flex-start',
    marginLeft: 15
  },
  title:{
    fontSize: 28,
    fontWeight: '600',
    color: "#A52A2A",
  },
  countryText:{
    fontSize: 24,
    fontWeight: '400',
    color: "#A52A2A",
  },
  descriptionArea:{
    marginTop: 20,
    marginHorizontal: 15
  },
  descriptionText: {
    fontSize: 20,
  },
  buttonArea:{
    justifyContent: 'flex-end',
    marginTop: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FF0000",
    width: "80%",
    alignSelf: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText:{
    fontSize: 20,
    color: "white"
  }
});
