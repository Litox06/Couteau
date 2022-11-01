import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";

export default function Universities() {
  return (
    <View style={styles.container}>
      <Text>University View</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#9ea3a0",
  },
  image: {
    width: 350,
    height: 350,
    resizeMode: "contain",
  },
});
