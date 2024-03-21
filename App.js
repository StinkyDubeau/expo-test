import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react"


export default function App() {
  const [counter, setCounter] = useState(0);



  return (
    <View style={styles.container}>
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
