import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setUserPrediction } from '../redux/Slice';
import { useNavigation, NavigationProp } from '@react-navigation/native'; // Import StackNavigationProp

interface HomeNumberInputProps {
    
}

const HomeNumberInput: React.FC<HomeNumberInputProps> = () => {
    const [text, setText] = useState(""); 
    const dispatch = useDispatch();

    const navigation = useNavigation<NavigationProp<any>>(); 

    const handleClean = () => {
        setText(""); 
    }
    
    const handleEnteredNumber = () => {

        if(text === ""){
            alert("Boş olamaz")
        }else if(Number(text) < 0){
            alert("0'dan Küçük olamaz!")
        }else if(Number(text) > 15){
            alert("15'ten büyük olamaz")
        }else{
            dispatch(setUserPrediction(Number(text)))
        }

    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.text_input}
                inputMode='decimal'
                value={text}
                onChangeText={(newText) => setText(newText)}
            />
            <View style={styles.button_container}>
                <TouchableOpacity onPress={handleClean}>
                    <Text style={styles.button_text}>Temizle</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleEnteredNumber}>
                    <Text style={styles.button_text}>Onayla</Text>
                </TouchableOpacity>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

export default HomeNumberInput;

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#e6b505",
        borderRadius: 25,
        width: "90%",
        paddingVertical: 25,
        paddingHorizontal: 20,
    },
    text_input: {
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomWidth: 1,
        borderBottomColor: "white",
        alignSelf: 'center',
        fontSize: 28,
        marginBottom: 30
    },
    button_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    button_text: {
        color: "white",
        fontSize: 18
    }
})
