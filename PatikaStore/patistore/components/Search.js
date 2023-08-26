import {StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View>
      <TextInput placeholder='Search...' style = {styles.search}/>
    </View>
  )
}


const styles = StyleSheet.create({

  search: {
      marginTop: 50,
      marginHorizontal: 15,
      width : "90%",
      padding: 10,
      borderColor: "#ECEFF1",
      backgroundColor: "#ECEFF1",
      borderRadius: 10,
      
  }
})