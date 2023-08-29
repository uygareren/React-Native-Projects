import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function MealDetail({ route }) {
  const { id } = route.params;

  

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
