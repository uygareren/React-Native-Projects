import { StatusBar, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React, {useState} from 'react'
import ModalInput from '../components/ModalInput';
import { AntDesign } from '@expo/vector-icons';
import ShowingWordsComponent from '../components/ShowingWordsComponent';

export default function HomepageScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const containerStyle = {
    backgroundColor: modalVisible ? '#f7f7f5' : 'white',
  };

  

  return (
    <View style={[styles.container, containerStyle]}>
      <StatusBar style="auto" />

      <ShowingWordsComponent/>

      <TouchableOpacity style={styles.add_btn} onPress={() => setModalVisible(!modalVisible)}>
        <AntDesign name="pluscircle" size={60} color="black" />
      </TouchableOpacity>

      <ModalInput modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
      },
      add_btn: {
        position: 'absolute',
        bottom: 25,
        right: 25,
      },
      text: {
        alignSelf: 'center',
      },
})