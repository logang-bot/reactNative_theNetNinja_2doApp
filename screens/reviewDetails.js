import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}
