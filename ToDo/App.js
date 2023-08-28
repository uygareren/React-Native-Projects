import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import TodoCountComponent from './components/TodoCountComponent';
import Todos from './components/Todos';
import TodoInputComponent from './components/TodoInputComponent';

export default function App() {
  const [todoList, setTodoList] = useState([]);
  const [todoCount, settodoCount] = useState("")
  

  const addTodo = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  
  useEffect(() => {
    counter = todoList.length
    settodoCount(counter.toString()); // Update todoCount when todoList changes
    console.log(counter)
  }, [todoList])



  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TodoCountComponent count = {todoCount}/>
      <Todos todos={todoList} />
      <TodoInputComponent addTodo={addTodo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
});
