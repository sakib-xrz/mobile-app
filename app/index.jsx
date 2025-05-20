import { View, Text, Image } from "react-native";
import logo from "../assets/favicon.png";

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image source={logo} />
      <Text className="text-red-500 text-center">Home</Text>
    </View>
  );
}
