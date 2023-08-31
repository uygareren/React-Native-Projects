import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native';
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeSubmittedId } from '../redux/Slice';

export default function SubmittedJobsComponent({ id, title, location, work_style, experience_level, navigation }) {

  const dispatch = useDispatch();

  const handleRemoveSubmittedJob = (id) => {
    console.log(id)
    dispatch(removeSubmittedId({id:id}))
  }
  
  return (
    <View style={styles.cardContainer}>
      <View style={styles.bodyContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.workStyle}>{work_style}</Text>
        <View style={styles.locationContainer}>
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.level}>{experience_level}</Text>
      </View>
      <TouchableOpacity onPress={() => handleRemoveSubmittedJob(id)} style = {styles.remove_button_container}>
        <Text style = {styles.button_text}>Remove</Text>
      </TouchableOpacity>
    </View>
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
  remove_button_container:{
    alignSelf: 'center',
    paddingVertical:10,
    paddingHorizontal: 50,
    backgroundColor: '#EF5350',
    marginBottom: 20,
    borderRadius: 15

  },
  button_text:{
    fontSize: 20,
    color: "white"
  }
});
