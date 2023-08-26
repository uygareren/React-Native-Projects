import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'

export default function ProductCard({ imageUrl, title, price, isStock }) {
    return (
      <View style={styles.cardContainer}>
        <View style={styles.bodyContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />

          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            {isStock ? (<Text></Text>) : <Text style={styles.soldOut}>Sold Out!</Text>}
          </View>

        </View>
      </View>
    );
  }
  


const styles = StyleSheet.create({
    cardContainer:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 40,
    

    },
    bodyContainer: {
        
        width: 175,
        height: 385,
        backgroundColor: "#ECEFF1",
        paddingVertical: 15,
        borderRadius: 15
    },
    image:{
        width: 150,
        height: 225,
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 15,
    },
    textContainer:{
      marginLeft: 10,
      marginVertical: 20,
      width: 150,
      alignSelf: 'flex-start',
    },
    title:{
        fontSize: 18,
        fontWeight: '700'
    },
    price:{
        fontSize: 16,
        fontWeight: "600",
        color: "#9A9A9B"
    },
    soldOut:{
      marginTop: 5,
      fontSize: 20,
      fontWeight: '600',
      color: "#c20609"

    }
})