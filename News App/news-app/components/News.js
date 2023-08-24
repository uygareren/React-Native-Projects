import React from 'react';
import { FlatList, StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';

export default function News({ news_data }) {
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.imageUrl }} style={styles.image} />
      <Text style={styles.author_title}>{item.author}</Text>
      <Text style={styles.news_title}>{item.title}</Text>
      <Text style={styles.news_description}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={news_data}
        renderItem={renderItem}
        keyExtractor={item => item.u_id.toString()}
        contentContainerStyle={styles.flatListContainer}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  flatListContainer: {
    padding: 10,
    flexGrow: 1, // İçeriğin büyüklüğüne göre genişlemesini sağlar
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10, // Haber öğeleri arasına boşluk bırakır
  },
  image: {
    width: 375,
    height: 250,
    alignSelf: 'center',
    marginBottom: 10,
  },
  author_title: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 5,
  },
  news_title: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
  },
  news_description: {
    fontSize: 15,
    marginBottom: 10,
  },
});
