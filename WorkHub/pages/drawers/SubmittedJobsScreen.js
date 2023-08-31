import { StyleSheet, Text, View, FlatList } from 'react-native'; // Make sure to import FlatList
import React, { useEffect } from 'react'; // Import useEffect
import { useSelector } from 'react-redux';
import jobData from "../../data/jobs.json";
import SubmittedJobsComponent from '../../components/SubmittedJobsComponent';

export default function SubmittedJobsScreen() {
  const submitteds = useSelector((state) => state.submitteds); // Use the correct slice name
  const submitted_job_ids = submitteds.submitted_job_id;

  const submittedJob = jobData.filter(job => submitted_job_ids.includes(job.id));

  useEffect(() => {
    console.log(submitted_job_ids);
  }, [submitted_job_ids]);

  const renderSubmitteds = ({ item }) => {
    return (
      <SubmittedJobsComponent
        id={item.id}
        title={item.title}
        location={item.location}
        work_style={item.work_style}
        experience_level={item.experience_level}
        description={item.description}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={submittedJob}
        renderItem={renderSubmitteds}
        keyExtractor={(item) => item.id.toString()} // Convert the id to a string
      />
    </View>
  );
}

const styles = StyleSheet.create({});
