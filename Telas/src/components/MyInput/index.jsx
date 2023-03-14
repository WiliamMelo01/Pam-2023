import { View, Text, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { styles } from "./myInput.style";
import { useState } from "react";
export default function MyInput({ placeholder, icon }) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {
          borderWidth: isFocused ? 2 : "0",
          borderColor: isFocused ? "#3b79f5" : "transparent",
        },
      ]}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color={isFocused ? "#3b79f5" : "#c4cad4"}
        style={styles.icon}
      />
      <View style={styles.inputWrapper}>
        <TextInput
          style={[
            styles.input,
            {
              outline: "none",
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor="#c4cad4"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          underlineColorAndroid="transparent"
        />
      </View>
    </View>
  );
}
