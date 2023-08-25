import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux'; // useSelector import ediliyor

export default function Secondary() {
  const list = useSelector(state => state.nameList);
  const user = useSelector(state => state.username);

  return (
    <View style={styles.container}>
      <Text style = {styles.username}>USERNAME: {user}</Text>

      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  username:{
    fontSize: 20,
    fontWeight: '600'
  },
  item: {
    padding: 10,
    fontSize: 18,
  },
});
