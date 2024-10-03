import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Form from "./components/Form";
import ListItem from "./components/ListItem";
import React from "react";
import { Todo } from "./types/Todo";
import { USER_ID, createTodo, deleteTodo, getTodos } from "./api/todos";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([{  id: Number(Math.random().toString(36).substring(7)),
    userId: USER_ID,
    title: 'render todo list',
    completed: false}])
  const [errorMessage, setErrorMessage] = useState('');

  const handleAddTodo = async (title: string) => {
    const formattedTitle = title.trim();

    if (!formattedTitle) {
      setErrorMessage('Title should not be empty');

      return;
    }

    const newTodo = {
      title: formattedTitle,
      completed: false,
      userId: USER_ID,
    };

    try {
      const createdTodo = await createTodo(newTodo);

      setTodos(currentTodos => [...currentTodos, createdTodo]);
    } catch {
      setErrorMessage('Unable to add a todo');
      throw new Error('Unable to add a todo');
    }
  };

  const handleDeleteTodo = async (id: number) => {
    try {
      await deleteTodo(id);

      setTodos(currentTodos => currentTodos.filter(todo => todo.id !== id));
    } catch {
      setErrorMessage('Unable to delete a todo');
    }
  };

  useEffect(() => {
    getTodos()
      .then(setTodos)
      .catch(() => setErrorMessage('Unable to load todos'));
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <Form addTodo={ handleAddTodo } />
      <FlatList
        data={todos}
        renderItem={({ item }) =>
          <ListItem el={item} handleDelete={handleDeleteTodo}/>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
});
