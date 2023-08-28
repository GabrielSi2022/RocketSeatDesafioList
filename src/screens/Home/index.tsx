import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Task from "../../components/Task";

export default function Home() {
  return (
    <View>
      <View className="flex justify-center items-center pt-24 pb-24 bg-[#0d0d0d]">
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View className="px-6 h-screen bg-[#191919]">
        <View className="flex  flex-row gap-1 items-center mt-[-35px]  ">
          <TextInput
            className="flex-1 bg-[#262626] placeholder:text-[#808080] placeholder:text-[16px]
           p-4 rounded-md border border-[#0D0D0D] "
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
          />

          <TouchableOpacity className="p-[20px] bg-[#1E6F9F] rounded-md ">
            <Image
              className="w-5 h-5"
              source={require("../../../assets/plus.png")}
            />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row justify-between pt-8 pb-5 mb-5 border-b border-[#333333]">
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-[#4EA8DE] text-[14px] font-bold">
              Criadas
            </Text>
            <Text className="text-white text-[12px] font-bold bg-[#333333] px-2 rounded-[999px]">
              0
            </Text>
          </View>
          <View className="flex flex-row gap-2 items-center">
            <Text className="text-[#8284FA] text-[14px] font-bold">
              Concluídas
            </Text>
            <Text className="text-white text-[12px] font-bold bg-[#333333] px-2 rounded-[999px]">
              0
            </Text>
          </View>
        </View>

        <View>
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
          <Task />
        </View>
      </View>
    </View>
  );
}
