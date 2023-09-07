import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

interface HomeUserCardProps{
    user:any,
    navigation: any
}

const HomeUserCard: React.FC<HomeUserCardProps> = ({user, navigation}) => {


    const borderColor = user.isOnline ? "#03ab5a" : "#a30517";

    return (
        <View style = {styles.container}>  
            <View style={[styles.image_view, { borderColor }]}>
                <Image source={{uri: user.avatar}} style = {styles.image}/>
            </View>

            <View style = {styles.text_view}>
                <Text style = {styles.names}>{user.name}</Text>
                <Text style = {styles.email}>{user.email}</Text>
            </View>

            <TouchableOpacity style = {styles.icon_view} onPress={() => navigation.navigate("ProfileScreen", {id:user.id})}>
                <AntDesign name="right" size={32} color="black" />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        width: "100%",
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 10
    },
    image_view:{
        width: 100,
        height:100,
        borderRadius: 150,
        borderWidth: 5,
    },
    image:{
        width: "100%",
        height: "100%",
        borderRadius: 150
    },
    text_view:{
        flex: 6,
        marginLeft: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },
    icon_view:{
        flex: 1,
        marginLeft: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    names:{
        fontSize: 20,
        fontWeight: "bold"
    },
    email:{
        color: "#737273",
        marginTop: 10
    },
    
})

export default HomeUserCard;