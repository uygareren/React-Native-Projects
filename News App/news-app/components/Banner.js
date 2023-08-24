import React from 'react';
import { FlatList, Image, SafeAreaView, StyleSheet, View } from 'react-native';

export default function Banner({ data }) {
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        horizontal
        renderItem={({ item }) => (
          <Image
            style={styles.image}
            source={{ uri: item.imageUrl }}
          />
        )}
        keyExtractor={item => item.id.toString()} 
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle={styles.contentContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 25, // Add top margin
    paddingHorizontal: 10, // Add horizontal padding
  },
  image: {
    width: 200,
    height: 200,
    marginRight: 10, // Add some horizontal spacing between images
  },
});
