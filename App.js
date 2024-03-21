import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Button } from "react-native";
import { useState } from "react";
import { say } from "cowsay";

export default function App() {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(say({text: "wzup"}))

  return (
    <View className="flex-1 justify-center items-center bg-white">
      <View className="flex justify-center m-auto w-56 bg-yellow-200 border border-yellow-400 rounded-xl shadow p-4 content-center">
          {/* Title */}
          <Text className="text-center text-2xl text-slate-900">Native App Test</Text>

          {/* Moocow */}
          <Text className="font-test text-xl text-slate-800">{text}</Text>

          {/* Plus Button */}
          <View className="flex">
            <View className="bg-yellow-400 rounded-lg my-2">
              <Button onPress={() => {
                setCounter(counter+1)
                setText(say({text: `${counter}`}))  
              } 
            } title="Plus"/>
            </View>

            {/* Minus Button */}
            <View className="bg-yellow-400 rounded-lg">
              <Button onPress={() => {
                setCounter(counter-1)
                setText(say({text: `${counter}`}))  
              } 
            } title="Minus"/>
            </View>
          </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}