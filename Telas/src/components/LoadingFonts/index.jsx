import { Text, View, ActivityIndicator } from "react-native";
import React, { Component } from "react";
import { styles } from ".//loadingFonts.style";

export default class LoadingFonts extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={40} />
        <Text style={styles.loadingText}>Fonts are loading...</Text>
      </View>
    );
  }
}
