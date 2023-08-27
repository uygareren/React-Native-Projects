import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import SearchComponent from './components/SearchComponent';
import musicData from "./data/music-data.json"
import MusicCardComponent from './components/MusicCardComponent';

export default function App() {

  const [list, setlist] = useState(musicData);

  const handleSearch = (text) => {
    const filteredList = musicData.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    })

    setlist(filteredList);
  }

  const renderComponent = ({ item }) => {
    return <MusicCardComponent imageUrl={item.imageUrl} title={item.title} artist={item.artist} year={item.year} isSoldOut={item.isSoldOut} />;
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <SearchComponent placeholder={"Search..."} onSearch={handleSearch}/>
      <FlatList data={list} renderItem={renderComponent} keyExtractor={(item) => item.id.toString()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchComponent:{
    alignItems: 'center', // Align items vertically in the center
    marginLeft: 5,
    marginBottom: 10,
  },
  
});
