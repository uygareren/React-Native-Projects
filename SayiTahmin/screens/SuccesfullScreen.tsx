import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { clearUserPredict, setChangeComputerPrediction } from '../redux/Slice';
import { useDispatch, useSelector } from 'react-redux';

interface SuccesfullScreenProps {}

const SuccesfullScreen: React.FC<SuccesfullScreenProps> = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    return () => {
      dispatch(setChangeComputerPrediction());
      dispatch(clearUserPredict());
    };
  }, []);

  const user_prediction_number = useSelector((state: { numberPrediction: { user_predict: number[] } }) => state.numberPrediction.user_predict );
  const count = user_prediction_number.length;


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Congratulations...</Text>
      <Text style={styles.counter_text}>You guessed it on the {count}th try</Text>
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
