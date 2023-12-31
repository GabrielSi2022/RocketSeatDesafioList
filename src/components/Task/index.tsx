import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

type ITask = {
  task: {
    id: string;
    title: string;
    completed?: boolean;
  };
  onRemove: () => void;
  onChecked: () => void;
};

export function Task({ task, onRemove, onChecked }: ITask) {
  return (
    <View className="mb-3">
      <View className=" flex flex-row justify-between items-center p-3 h-16 bg-[#262626] rounded-lg border border-[#333333]">
        <BouncyCheckbox
          className="max-w-[337]"
          size={17}
          isChecked={task.completed}
          disableBuiltInState
          fillColor="#5E60CE"
          unfillColor="transparent"
          text={task.title}
          iconStyle={{ borderColor: "blue" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={onChecked}
        />

        <TouchableOpacity onPress={onRemove}>
          <Image
            className="w-[18px] h-[18px] "
            source={require("../../../assets/Trash.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
