import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { NavigationProp, useNavigation } from '@react-navigation/native';

interface UpdateNumberComponentProps{
    
}

const UpdateNumberComponent: React.FC<UpdateNumberComponentProps> = () => {

    const navigation = useNavigation<NavigationProp<any>>();

    const handleUpdate = () => {
        navigation.navigate("HomepageScreen");
    }

    return (
        <TouchableOpacity style = {styles.update_container} onPress={handleUpdate}>
            <Ionicons name="arrow-back-circle-outline" size={36} color="black" />
            <Text style = {styles.update_text}>Update Number</Text>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    update_container:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center'
    },
    update_text:{
        fontSize: 22,
        fontWeight: '600',
        marginLeft: 5
    }
})

export default UpdateNumberComponent;