import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { say } from "cowsay";

export default function App() {
  const [counter, setCounter] = useState(0);

  const text = say({text: "wassup"});

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="w-56 h-56 bg-yellow-200 border border-yellow-400 rounded-xl shadow-xl p-4 mt-20">
        <View className="flex justify-center m-auto">
          <Text className="font-mono">{text}</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
