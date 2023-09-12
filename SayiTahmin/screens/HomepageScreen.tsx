import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import HomeNumberInput from '../components/HomeNumberInput';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import UserPredictionBoard from '../components/UserPredictionBoard';


interface HomepageScreenProps{

}

const HomepageScreen:React.FC<HomepageScreenProps> = () => {

    const user_prediction_number = useSelector((state: { numberPrediction: { user_predict: number[] } }) => state.numberPrediction.user_predict );
    const random_number = useSelector((state: { numberPrediction: { computer_predict: number } }) => state.numberPrediction.computer_predict) || [];

    const navigation = useNavigation<NavigationProp<any>>();

    useEffect(() => {
    let last_number_index = user_prediction_number.length - 1;
    let last_user_prediction = user_prediction_number[last_number_index];
    
    console.log(random_number);
    console.log(user_prediction_number);

    if (random_number === last_user_prediction) {
        navigation.navigate("SuccesfullScreen");
        
    }else if((last_number_index != -1) && (random_number != last_user_prediction)){
        navigation.navigate("PredictionScreen");

    }
 

    }, [user_prediction_number]);


    return (
        <View style = {styles.container}>
            <HomeNumberInput/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }

})

export default HomepageScreen;

