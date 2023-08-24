import { StyleSheet, Text, View, Image, ScrollView, TouchableWithoutFeedback } from 'react-native'
import React from 'react'

export default function ProductCard({product, onselect}) {
  return (
    <TouchableWithoutFeedback onPress={onselect}>
    <View style = {styles.container}>
      <Image style= {styles.image} source={{uri: product.image}}/>
      <View style= {styles.bodyContainer}>
        <ScrollView>
        <Text style={styles.title}>{product.title}</Text>
        </ScrollView>
        <Text style={styles.price}>{product.price} $</Text>
      </View>
    </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 20,
    flexDirection: 'row'
  },
  bodyContainer:{
    padding: 20,
    flex: 1,
    backgroundColor: "#f7f0fa",
    height: 150

  },
  image: {
    width: 100,
    height:150,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
  },
  price: {
    fontSize:18,
    fontWeight: '700',
    marginRight: 10,
    position: 'absolute',
    bottom: 0,
    right: 0
  }
})