import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';

export default function Todos({ todos }) {

    const [isTouched, setisTouched] = useState(false)

  const renderTodoItem = ({ item }) => (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{item}</Text>
    </View>
  );

  if (todos.length === 0) {
    return null; 
  }

  return (
    <View style={styles.todosContainer}>
      <FlatList
        data={todos}
        renderItem={renderTodoItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  todosContainer: {
    marginVertical: 30,
    width: "90%",
    alignSelf: 'center',
  },
  todoItem: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#7DA453",
    borderRadius: 10,
    padding: 15,
  },
  todoText: {
    color: "white",
    fontSize: 16,
  }
});
