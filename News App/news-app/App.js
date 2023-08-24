import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Banner from './components/Banner';
import News from './components/News';

import newsBannerData from './data/news_banner_data.json'; 
import newsData from './data/news_data.json'; 


export default function App() {
  return (
      
      <SafeAreaView style={styles.container}>
        <Text style={styles.news}>News</Text>
        <Banner data={newsBannerData} /> 
        <News news_data={newsData}/>
      </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  news: {
    marginTop:50,
    fontSize: 32,
    fontWeight: '600',
    alignSelf: "center"
  }
});
