import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import Task from "../../components/Task";

export default function Home() {
  const [tarefas, setTarefas] = useState<string[]>([]);
  const [tarefasName, setTarefasName] = useState("");

  function handleTaskAdd() {
    if (tarefas.includes(tarefasName)) {
      return Alert.alert(
        "Erro ao Adicionar Tarefa",
        "Está Tarefa já está registrada"
      );
    }

    if (tarefasName == "") {
      return Alert.alert("Erro", "Campo Vazio");
    }

    setTarefas((prevState) => [...prevState, tarefasName]);
    setTarefasName("");
  }

  function handleTaskRemove(task: string) {
    Alert.alert("Remover Tarefa", `Remover a Tarefa ${task}?`, [
      {
        text: "Sim",
        onPress: () =>
          setTarefas((prevState) =>
            prevState.filter((tarefas) => tarefas !== task)
          ),
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }
  return (
    <View>
      <View className="flex justify-center items-center pt-24 pb-24 bg-[#0d0d0d]">
        <Image source={require("../../../assets/Logo.png")} />
      </View>

      <View className="px-6 h-screen bg-[#191919]">
        <View className="flex  flex-row gap-1 items-center mt-[-35px]  ">
          <TextInput
            className="flex-1 bg-[#262626] placeholder:text-[#808080] placeholder:text-[16px]
           p-4 rounded-md border border-[#0D0D0D] focus:border focus:border-[#5E60CE]"
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor={"#6b6b6b"}
            onChangeText={setTarefasName}
            value={tarefasName}
          />

          <TouchableOpacity
            className="p-[20px] bg-[#1E6F9F] rounded-md "
            onPress={handleTaskAdd}
          >
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

        <FlatList
          data={tarefas}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Task
              key={item}
              task={item}
              onRemove={() => handleTaskRemove(item)}
            />
          )}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={() => (
            <View className="items-center mt-[70px]">
              <Image
                className="mb-4"
                source={require("../../../assets/Clipboard.png")}
              />
              <Text className="text-sm leading-5 text-[#808080] text-center font-bold">
                Você ainda não tem tarefas cadastradas
              </Text>

              <Text className="text-sm leading-5 text-[#808080] text-center">
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}
