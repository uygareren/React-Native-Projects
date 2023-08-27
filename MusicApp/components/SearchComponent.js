import { SafeAreaView, StyleSheet, TextInput, View, Button } from 'react-native'
import React, {useState} from 'react'

export default function SearchComponent({placeholder, onSearch}) {



  return (
    <SafeAreaView style={styles.searchContainer}>
      <TextInput placeholder={placeholder} onChangeText={onSearch}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    marginTop: 50,
    width: '90%',
    padding: 10,
  },
})
