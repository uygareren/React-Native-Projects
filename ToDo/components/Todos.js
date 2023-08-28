import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

export default function Todos({ todos }) {
  const [doneTodos, setDoneTodos] = useState([]);

  const handleTodoDone = (item) => {
    if (!doneTodos.includes(item)) {
      setDoneTodos([...doneTodos, item]);
    } else {
      setDoneTodos(doneTodos.filter((todo) => todo !== item));
    }
  };

  const isTodoDone = (item) => {
    return doneTodos.includes(item);
  };

  const renderTodoItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.todoItem,
        isTodoDone(item) ? styles.doneTodoItem : null
      ]}
      onLongPress={() => handleTodoDone(item)}
    >
      <Text
        style={[
          styles.todoText,
          isTodoDone(item) ? styles.doneTodoText : null
        ]}
      >
        {item}
      </Text>
    </TouchableOpacity>
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
  },
  doneTodoItem: {
    backgroundColor: "#4f6570",
  },
  doneTodoText: {
    textDecorationLine: "line-through",
  },
});
