import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function TodoInputComponent({ addTodo }) {
  const [text, settext] = useState('');

  const handleTodo = () => {
    if (text.trim() !== '') {
      addTodo(text);
      settext('');
    }
  };

  

  return (
    <View style={styles.todoInputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Yapılacak.."
        placeholderTextColor="white"
        value={text}
        onChangeText={settext}
      />
      <TouchableOpacity
        style={[
          styles.buttonContainer,
          { opacity: text.trim() !== '' ? 1 : 0.5 } // Adjust the opacity based on text input
        ]}
        onPress={handleTodo}
        disabled={text.trim() === ''}>
        <Text style={styles.buttonText}>Kaydet</Text>
      </TouchableOpacity>
    </View>
  );
}





const styles = StyleSheet.create({
  todoInputContainer: {
    width: '90%',
    alignSelf: 'center',
    borderRadius: 15,
    position: 'absolute',
    bottom: 30,
    backgroundColor: '#4f6570',
  },
  textInput: {
    width: '90%',
    alignSelf: 'center',
    padding: 10,
    marginVertical: 10,
    color: 'white',
    fontSize: 16,
    borderBottomColor: 'white',  
    borderBottomWidth: 1,        
  },
  buttonContainer:{
    width:"60%",
    marginVertical: 20,
    padding: 15,
    borderRadius: 20,
    backgroundColor: "#808080",
    alignSelf: 'center',
    alignItems: 'center',
  },
  buttonText :{
    color: "white",
    fontSize: 18
  }

});
