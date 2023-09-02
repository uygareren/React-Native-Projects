import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useSelector } from 'react-redux';

export default function ShowingWordsComponent() {
  const dictionary = useSelector((state) => state.dictionary.words);

  const [currentIndex, setCurrentIndex] = useState(0);

  const navigateToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const navigateToNext = () => {
    if (currentIndex < dictionary.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    console.log(dictionary);
  }, [dictionary]);

  return (
    <View style={styles.container}>
      <Text style={styles.total_word}>Total Word: {dictionary.length}</Text>
      <Text style={styles.count_text}>Current Word: {
        dictionary.length === 0 ? currentIndex : currentIndex + 1
      }</Text>
      <View style={styles.body_container}>

        <TouchableOpacity style={styles.left_arrow} onPress={navigateToPrevious}>
          <AntDesign name="left" size={48} color="black" />
        </TouchableOpacity>

        <View style={styles.text_body_container}>
          <Text style={styles.text_english}>
            {dictionary[currentIndex]?.newEnglishWord} 
          </Text>
          <Text style={styles.text_turkish}>
            {dictionary[currentIndex]?.newTurkishWord} 
          </Text>
        </View>

        <TouchableOpacity style={styles.right_arrow} onPress={navigateToNext}>
          <AntDesign name="right" size={48} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: "black"
  },
  total_word:{
    position:'absolute',
    top: 25,
    alignSelf: 'center',
    fontSize: 26,
    fontWeight: "600"
  },
  count_text: {
    alignSelf: 'center',
    fontSize: 32,
    color: '#d4061b',
    fontWeight: 'bold',
  },
  body_container: {
    width: '100%',
    height: 200,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_body_container: {
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_english: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  text_turkish: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#858585',
    marginTop: 15,
  },
  left_arrow: {
    position: 'absolute',
    left: 25,
  },
  right_arrow: {
    position: 'absolute',
    right: 25,
  },
});
