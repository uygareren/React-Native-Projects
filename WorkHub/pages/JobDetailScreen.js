import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import jobData from "../data/jobs.json";
import { useDispatch } from 'react-redux';
import { addFavoriteId, addSubmittedJobId } from '../redux/Slice';

export default function JobDetailScreen({ route, navigation }) {
  const { id } = route.params;

  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    // Find the job data with the specified id
    const job = jobData.find(job => job.id === id);
    setData(job);

    // Update the header title and styling
    if (job) {
      navigation.setOptions({
        headerTitle: job.title,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#EF5350',
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{ flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="chevron-back" size={24} color="#f56e6c" />
            <Text style={{ color: '#f56e6c', marginLeft: 5, fontSize: 18 }}>Jobs</Text>
          </TouchableOpacity>
        ),
      });
    }
  }, [id, navigation]);

  const handleFavorite = (id) => {
    dispatch(addFavoriteId({id:id}))
  }
  const handleSubmitted = (id) => {
    dispatch(addSubmittedJobId({id:id}))
  }


  return (
    <View>
      <ScrollView>
        <View style={styles.headContainer}>
          <Text style={styles.job_title}>{data.title}</Text>
          <View style={styles.location_view}>
            <Text style={styles.location_tag}>Location: </Text>
            <Text style={styles.location}>{data.location}</Text>
          </View>
          <View style={styles.job_level_view}>
            <Text style={styles.job_level_tag}>Experience Level: </Text>
            <Text style={styles.job_level}>{data.experience_level}</Text>
          </View>
          <Text style={styles.job_detail_title}>Job Detail</Text>
        </View>

        <View style={styles.description_view}>
          <Text style={styles.description_text}>{data.description}</Text>
        </View>

        <View style={styles.button_container}>
          <TouchableOpacity style={styles.button_view} onPress={() => handleSubmitted(data.id)}>
            <View style={styles.button_area}>
              <Ionicons name="exit-outline" size={24} color="white" style={styles.button_icon} />
              <Text style={styles.button_text}>Submit</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button_view} onPress={() => handleFavorite(data.id)}>
            <View style={styles.button_area}>
              <AntDesign name="heart" size={24} color="white" style={styles.button_icon} />
              <Text style={styles.button_text}>Favorite Job</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headContainer:{
    width: "100%",
    backgroundColor: "#dbd7d7",
    padding: 10,
    
  },
  job_title:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#37474F",    
  },
  location_view:{
    flexDirection: 'row',
    marginTop: 10
  },
  location_tag:{
    fontSize: 20,
    color: "#EF5350",
    fontWeight: "bold"
  },
  location:{
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
  job_level_view:{
    flexDirection: 'row',
    marginTop: 10
  },
  job_level_tag:{
    fontSize: 20,
    color: "#EF5350",
    fontWeight: "bold"
  },
  job_level:{
    fontSize: 20,
    color: "black",
    fontWeight: "bold"
  },
  job_detail_title:{
    fontSize: 28,
    fontWeight: "bold",
    color: "#37474F",    
    alignSelf: 'center',
    marginTop: 15
  },
  description_view:{
    paddingVertical: 30,
    paddingHorizontal: 10,
    alignItems: 'center'
  },
  description_text:{
    fontSize: 18,
  },
  button_container:{
    flexDirection: 'row',
    justifyContent:'space-around',
    marginTop: 30,
     
  },
  button_area:{
    flexDirection: 'row'
  },
  button_view:{
    paddingVertical: 15,
    paddingHorizontal: 30,
    backgroundColor: "#EF5350",
    borderRadius: 10
  },
  button_icon:{
    marginRight:10
  },
  button_text:{
    fontSize: 18,
    fontWeight: "bold",
    color: "white"
  }

})