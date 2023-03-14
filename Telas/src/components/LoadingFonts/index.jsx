import { Text, View, ActivityIndicator } from "react-native";
import React from "react";
import { styles } from ".//loadingFonts.style";

export default function LoadingFonts() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={40} />
      <Text style={styles.loadingText}>Fonts are loading...</Text>
    </View>
  );
}
