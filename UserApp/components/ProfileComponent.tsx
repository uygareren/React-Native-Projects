import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, } from 'react-native';
import { User } from '../types/types';


interface ProfileComponentProps {
    data: User[]
}

const ProfileComponent: React.FC<ProfileComponentProps> = ({data}) => {



    return (
        <View>

            <View style = {styles.image_view}>
                <Image source={{uri: data[0].avatar}} style = {styles.image}/>
            </View>

            <View style = {styles.text_view}>
                <Text style = {styles.name}>{data[0].name}</Text>
                <Text style = {styles.email}>{data[0].email}</Text>
            </View>

            <View style = {styles.following_container}>

                <View style = {styles.following_body}>
                    <Text style = {styles.following_number}>{data[0].followers}</Text>
                    <Text>Takipçi</Text>
                </View>

                <View style = {styles.following_body}>
                    <Text style = {styles.following_number}>{data[0].following}</Text>
                    <Text>Takip</Text>
                </View>

            </View>

        </View>
    )
}


export default ProfileComponent;

const styles = StyleSheet.create({

    container:{
        borderWidth: 1,
        borderColor: "black",
    },
    image_view:{
        width: 250,
        height: 250,
        borderWidth: 6,
        borderColor: "#e409e8",
        borderRadius: 150,
        marginTop: 50

    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 150,
        resizeMode:'cover'
    },
    text_view:{
        alignItems: 'center',
        marginTop: 20
    },
    name:{
        fontSize: 24,
        fontWeight: "bold",
    },
    email:{
        fontSize: 18,
        color: "#858385",
        marginTop: 10
    },
    following_container:{
        flexDirection: "row",
        marginTop: 20,
        justifyContent: 'space-around'
    },
    following_body:{
        alignItems: 'center'
    },
    following_number:{
        fontSize: 30,
        fontWeight: "600"
    },
    following_text:{
        alignSelf: 'center'
    }

})