import React from "react";
import { globalStyles } from "../styles/global";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Home({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={globalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="Back to home screen" onPress={pressHandler}></Button>
    </View>
  );
}
