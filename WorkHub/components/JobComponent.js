import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';

export default function JobComponent({ id, title, location, work_style, experience_level, navigation }) {


  
  return (
    <TouchableWithoutFeedback onPress={() => {navigation.navigate("JobDetailScreen", {id})}}>
      <View style={styles.cardContainer}>
        <View style={styles.bodyContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.workStyle}>{work_style}</Text>
          <View style={styles.locationContainer}>
            <Text style={styles.location}>{location}</Text>
          </View>
          <Text style={styles.level}>{experience_level}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: '90%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    alignSelf: 'center'
  },
  bodyContainer: {
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  workStyle: {
    marginTop: 5,
    fontSize: 20,
    fontStyle: 'normal',
  },
  locationContainer: {
    borderRadius: 50,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#EF5350',
    alignSelf: 'flex-start', // Başlangıca hizala
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  level: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EF5350',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginBottom: 10,
  },
});
