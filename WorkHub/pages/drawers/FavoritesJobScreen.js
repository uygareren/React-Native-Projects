import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import FavoritesJobComponent from '../../components/FavoritesJobComponent';
import { useSelector } from 'react-redux';
import jobData from "../../data/jobs.json";

export default function FavoritesJobScreen() {
  const favorites = useSelector((state) => state.favorites);
  const favorites_id = favorites.favorites_id;

  const favoriteJobs = jobData.filter(job => favorites_id.includes(job.id));

  useEffect(() => {
    console.log(favorites_id);
  }, [favorites_id]);

  const renderFavorites = ({ item }) => {
    return (
      <FavoritesJobComponent
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
        data={favoriteJobs}
        renderItem={renderFavorites}
        keyExtractor={(item) => item.id.toString()} // Convert the id to a string
      />
    </View>
  )
}

const styles = StyleSheet.create({})