import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "paas-library";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Running POC</Text>
      <View style={styles.buttonWrapper}>
        <Button />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
    paddingLeft: 20,
  },
  buttonWrapper: {
    marginTop: 20,
    width: 300,
  },
});
