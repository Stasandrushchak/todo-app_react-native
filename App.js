import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import TodoList from "./components/ListItem";
import Form from "./components/Form";
import ListItem from "./components/ListItem";

export default function App() {
  const [todoList, setTodoList] = useState([
    { text: 'finish React Native todo-list', id: '0' },
    {
      text: 'deploy React Native App', id: '1' },
  ]);

  const onSubmit = (text) => {
    setTodoList((list) => {
      return [
        { text: text, id: Math.random().toString(36).substring(7), },
        ...list,
      ]
    })
  }

  const handleDelete = (id) => {
    setTodoList((list) => {
      return list.filter(todoItem => todoItem.id !== id)
    }
    )
  }

  return (
    <View style={styles.container}>
      <Header />
      <Form onSubmit={ onSubmit} />
      <FlatList
        data={todoList}
        renderItem={({ item }) =>
          <ListItem el={item} handleDelete={handleDelete}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
