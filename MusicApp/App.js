import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import SearchComponent from './components/SearchComponent';
import musicData from "./data/music-data.json"
import MusicCardComponent from './components/MusicCardComponent';

export default function App() {

  const [data, setdata] = useState([])

  const renderComponent = ({ item }) => {
    return <MusicCardComponent imageUrl={item.imageUrl} title={item.title} artist={item.artist} year={item.year} isSoldOut={item.isSoldOut} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchComponent placeholder={"Search..."}/>
      <FlatList data={musicData} renderItem={renderComponent} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});
