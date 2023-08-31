import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React, { useState, useEffect } from 'react';
import jobData from "../data/jobs.json";
import { useNavigation } from '@react-navigation/native'; 
import { SafeAreaView } from 'react-native-safe-area-context';
import JobComponent from '../components/JobComponent';

export default function HomepageScreen() {
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const renderJobs = ({ item }) => {
    return (
      <JobComponent 
        id={item.id}
        title={item.title}
        location={item.location}
        work_style={item.work_style}
        experience_level={item.experience_level}
        navigation={navigation}
      />
    );
  }

  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#EF5350" />
        </View>
      ) : (
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={jobData}
          renderItem={renderJobs}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F2F2F2",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
