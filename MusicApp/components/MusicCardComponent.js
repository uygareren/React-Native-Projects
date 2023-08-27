import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function MusicCardComponent({imageUrl , title, artist , year, isSoldOut}) {
  return (
    <View style = {styles.cardComponent}>
        <View style = {styles.imageContainer}>
            <Image style = {styles.image} source={{uri: imageUrl}} />
        </View>

        <View style = {styles.textContainer}>

            <View styles = {styles.titleContainer}>
                <Text style={styles.title}>{title}</Text>
            </View>
            

            <View style = {styles.subTextContainer}>
                <Text style={styles.artist}>{artist}</Text>
                <Text style={styles.year}>{year}</Text>
                {isSoldOut ? (<Text style = {styles.isSoldOut}>Tükendi</Text>): (<Text></Text>)}
            </View>

        </View>

    </View>
  )
}

const styles = StyleSheet.create({

    cardComponent : {
        marginTop: 10,
        width:"100%",
        height: 150,
        flexDirection: 'row'
    },
    imageContainer : {
        justifyContent: 'center',
        width: 150,
        height: 150,
        marginHorizontal: 10
    },

    image:{
        width: 125,
        height: 125,
        borderRadius: 150
    },
    textContainer:{
        flex: 1,
        justifyContent: 'center',
    },
    titleContainer:{

    },
    title:{
        fontSize: 23,
        fontWeight: '600'
    },
    subTextContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        justifyContent: 'flex-start'
    },
    artist:{
        fontSize: 14
    },
    year:{
        fontSize: 12,
        marginLeft: 10
    },
    isSoldOut:{
        padding: 5,
        position: 'absolute',
        right: 0,
        marginRight: 15,
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 10,
        color: "red"
    }

    
})