import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
  return (
    <View style={styles.main}>
      <Text style={styles.text}>Todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 0.2,
    paddingTop: 50,
    height: 100,
    backgroundColor: "grey",
    borderRadius: 10,
  },
  text: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: 'center',
  },
});
