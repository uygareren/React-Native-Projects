import { NavigationProp, useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

interface UserPredictionBoardProps{
}

const UserPredictionBoard : React.FC<UserPredictionBoardProps> = () => {

    const user_prediction_number = useSelector((state: { numberPrediction: { user_predict: number[] } }) => state.numberPrediction.user_predict );
    let last_number_index = user_prediction_number.length - 1;
    let last_prediction_number = user_prediction_number[last_number_index]

    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>User Prediction : </Text>
            <Text style = {styles.number_text}>{last_prediction_number}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#ec7eed",
        width: "80%",
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 30,
        marginTop: 30
    },
    text:{
        fontSize: 28,
        fontWeight: '600'
    },
    number_text:{
        fontSize: 28,
        fontWeight: '600',
        color: "white"
    }
})

export default UserPredictionBoard;