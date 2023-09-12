import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface UserPredictionListProps{
    counter: number
    number: number
}

const UserPredictionList : React.FC<UserPredictionListProps> = ({counter,number}) => {



    return (
        <View style = {styles.container}>
            <View style = {styles.counter_text_view}>
                <Text style = {styles.counter_text}>{counter}</Text>
            </View>

            <View style = {styles.prediction_text_view}>
                <Text style = {styles.prediction_text}>User prediction: </Text>
                <Text style = {styles.prediction_number_text}>{number}</Text>
            </View>


        </View>
    )
}

export default UserPredictionList;

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width:"90%",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginTop: 50,
        alignSelf: 'center',
        justifyContent: 'space-around',
        alignItems : 'center',
        backgroundColor: "#f2f0f0",
        borderRadius: 25
    },
    counter_text_view:{
       
    },
    counter_text:{
        fontSize: 24,
        color: "#fc0324",
        fontWeight: '600'
    },
    prediction_text_view:{
        flexDirection: "row",
    },
    prediction_text:{
        fontSize: 20
    },
    prediction_number_text:{
        fontSize: 20,
        fontWeight: '700',
        marginLeft: 10
    }
})