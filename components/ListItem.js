import { StyleSheet, TouchableHighlight, Text } from "react-native";

export default function ListItem({ el, handleDelete }) {
  return (
    <TouchableHighlight onPress={() => handleDelete(el.id)}>
      <Text style={styles.text}>{el.text}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    color: 'black',
    padding: 20,
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#fafafa",
    borderWidth: 1,
    marginTop: 20,
    width: "80%",
    marginLeft: '10%',
  },
});
