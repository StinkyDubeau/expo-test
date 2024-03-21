import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { say } from "cowsay";

export default function App() {
  const [counter, setCounter] = useState(0);

  const text = say("Wazzup");

  return (
    <View style={styles.container}>
      <View>
        <Text>{text}</Text>
      </View>
      <Text>Count: {counter}</Text>
      <Button
        title="Click me!"
        onPress={() => {
          setCounter(counter + 1);
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
