import { Dimensions, StyleSheet, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons'; 

const INPUT_WIDTH = (Dimensions.get("window").width * 7)/10; // Özel genişlik değeri

export default function Input({ placeholder, onChangeText, value, secureTextEntry, type }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View style={[styles.inputContainer, isFocused && styles.inputContainerFocused]}>
      {type === "username" ? <FontAwesome name="user" size={24} color={isFocused ? "purple" : "black"} /> : <Entypo name="key" size={24} color={isFocused ? "purple": "black"} />}
      <TextInput
        style={[
          styles.input,
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    padding: 15,
    marginBottom: 10,
  },
  inputContainerFocused: {
    borderColor: 'purple',
  },
  input: {
    width: INPUT_WIDTH,
    marginLeft: 10, // Simgeden aralık bırakmak için ekledik
    padding: 5,
    color: 'black', // Metin rengini siyah yap
  },
  inputFocused: {
    borderColor: 'purple',
  },
});
