import { View, Text } from "react-native";
import React from "react";
import { styles } from "../../styles/footer.style.js";

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.copy}>&copy; Wiliam Melo 2023 </Text>
    </View>
  );
}
