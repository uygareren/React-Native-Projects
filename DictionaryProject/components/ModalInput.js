import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Entypo } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setWords } from '../redux/Slice';

export default function ModalInput({ modalVisible, setModalVisible }) {


  const [turkish_text, setturkish_text] = useState("");
  const [english_text, setenglish_text] = useState("");

  const dispatch = useDispatch();

  const handleSave = () => {
    const trimed_turkish_word = turkish_text.trim();
    const trimed_english_word = english_text.trim();
  
    dispatch(
      setWords({
        turkishWord: trimed_turkish_word,
        englishWord: trimed_english_word,
      })
    );
    setturkish_text("");
    setenglish_text("");
  };

  
  


  return (
    <Modal visible={modalVisible} transparent={true} animationType='slide'  >
      <View style={styles.modal_container}>
        <View style={styles.modal_view_content}>

          <TouchableOpacity style = {styles.cross_btn} onPress={() => setModalVisible(!modalVisible)}>
            <Entypo  name="cross" size={36} color="black" />            
          </TouchableOpacity>

           <View>
                <TextInput style = {styles.textınput} placeholder='English' value={turkish_text} onChangeText={setturkish_text}></TextInput>
                <TextInput style = {styles.textınput} placeholder='Turkish' value={english_text} onChangeText={setenglish_text}></TextInput>
           </View> 

           <TouchableOpacity style = {styles.button_view} onPress={handleSave}>
                <Text style = {styles.button_text}>Save</Text>
           </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modal_container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0)', // Saydamlık eklemek için rgba kullanabilirsiniz
    justifyContent: 'flex-end',
  },
  modal_view_content: {
    width: '100%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 8,
    justifyContent: 'center',
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25
  },
  cross_btn:{
    position: 'absolute',
    right: 15,
    top: 15
  },
  textınput:{
    width: "70%",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: "#595958",
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 20,
    fontSize: 16
  },
  button_view:{
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 50,
    backgroundColor: "black",
    borderRadius: 20,
  },
  button_text:{
    fontSize: 18,
    fontWeight: "bold",
    color : "white"
  }
});
