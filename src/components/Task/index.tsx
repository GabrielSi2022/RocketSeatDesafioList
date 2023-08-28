import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Task() {
  return (
    <View
      className="flex flex-row gap-4 max-w-[320px] justify-between items-center
        mb-3             "
    >
      <View className="bg-[#262626] ">
        <BouncyCheckbox
          size={20}
          fillColor="#5E60CE"
          unfillColor="transparent"
          text="Integer urna interdum massa libero auctor neque turpis turpis semper."
          iconStyle={{ borderColor: "blue" }}
          innerIconStyle={{ borderWidth: 2 }}
          onPress={(isChecked: boolean) => {}}
        />
      </View>

      <View>
        <TouchableOpacity className="bg-[#262626]">
          <Image
            className="w-[15px] h-[15px] "
            source={require("../../../assets/Trash.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
