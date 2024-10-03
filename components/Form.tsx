import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  Button,
} from "react-native";
import { View } from "react-native-web";

export default function Form({ addTodo }) {
  const [title, setTitle] = useState('');

  const onChange = (title) => {
    setTitle(title);
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="please write a new todo..."
      />
      <View style={styles.button}>
      <Button
          onPress={() => addTodo(title)} title='Add todo' />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 3,
    padding: 20,
    fontSize: 20,
    marginHorizontal: '20%',
    marginTop: 20,
    marginBottom: 20,
    width: '60%',
  },
  button: {
    backgroundColor: 'green',
    width: '60%',
    fontSize: 32,
    marginLeft: '20%',
    borderRadius: 10,
  }
});
