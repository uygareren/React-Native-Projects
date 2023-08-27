import { SafeAreaView, StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function SearchComponent({placeholder}) {
  return (
    <SafeAreaView style = {styles.searchContainer}>
        <TextInput placeholder = {placeholder}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    searchContainer : {
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "black",
        borderRadius: 10,
        marginTop: 50,
        width: "90%",
        padding: 10
    }
})