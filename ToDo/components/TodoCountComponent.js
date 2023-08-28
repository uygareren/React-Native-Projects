import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TodoCountComponent({count}) {
  return (
    <SafeAreaView style = {styles.countContainer}>
      <Text style = {styles.text}>Yapılacaklar:</Text>
      {count === "0" ? 
      <Text style = {styles.text}>0</Text>: 
      <Text style = {styles.text}>{count}</Text>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    countContainer:{
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-around',
    },
    text:{
        fontSize: 24,
        fontWeight: "700",
        color: "#FFA500"
    },
})