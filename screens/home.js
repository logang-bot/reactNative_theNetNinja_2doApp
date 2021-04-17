import React from "react";
import { globalStyles } from "../styles/global";

import { StyleSheet, View, Text } from "react-native";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Home Screen</Text>
    </View>
  );
}
