import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'
import jobData from "../data/jobs.json"
import { useNavigation } from '@react-navigation/native' 
import { SafeAreaView } from 'react-native-safe-area-context'
import JobComponent from '../components/JobComponent'

export default function HomepageScreen() {

  const navigation = useNavigation();

  const renderJobs = ({item}) => {
    return <JobComponent 
    id = {item.id}
    title = {item.title}
    location = {item.location}
    work_style = {item.work_style}
    experience_level = {item.experience_level}
    navigation={navigation} // navigation prop'u geçir
    />
  }

  return (
    <View style = {styles.container}>
      <FlatList
        keyExtractor={(item) => item.id.toString()} // Convert id to string since it's a number
        data={jobData}
        renderItem={renderJobs}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F2F2F2",
}
})