import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useDispatch } from 'react-redux';

export default function Primary() {
  const [text, setText] = useState('');
  const [user, setUser] = useState('');

  const dispatch = useDispatch();
  

  const handleAdd = () => {
    dispatch({type: "ADD_NAME", payload: {name: text}})
    setText("");
  }
  const handleClean = () => {
    dispatch({type: "CLEAN_ALL"})
  }
  const handleUser = () => {
    dispatch({type: "SAVE_USER", payload: {username: user}})
    setUser("")
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder='Enter Text!'
        value={text}
        onChangeText={setText}
      />
      <View style={styles.buttonContainer}>
        <Button title='Add' onPress={handleAdd} style = {styles.button}/>
        <Button title='Clean All' onPress={handleClean} />
      </View>

      <TextInput
        style={styles.input}
        placeholder='Enter Username!'
        value={user}
        onChangeText={setUser}
      />
      <View style={styles.buttonContainer}>
        <Button title='Save User' onPress={handleUser} style = {styles.button}/>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    width: '80%',
    paddingVertical: 20,
  },
  button: {
    marginBottom: 20
  }
  
});
