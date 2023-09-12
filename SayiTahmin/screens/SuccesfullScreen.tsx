import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { clearUserPredict, setChangeComputerPrediction } from '../redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

interface SuccesfullScreenProps {
}

const SuccesfullScreen: React.FC<SuccesfullScreenProps> = () => {
    const dispatch = useDispatch();


    useEffect(() => {

        dispatch(setChangeComputerPrediction());
        dispatch(clearUserPredict());
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.text}>Tebrikler...</Text>
            <Text style={styles.text}></Text>
        </View>
    );
};

export default SuccesfullScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#79f299',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 28,
        fontWeight: '700',
        color: 'white',
    },
    counter_text: {
        marginTop: 50,
        fontSize: 28,
        fontWeight: '700',
        color: 'black',
    },
});
