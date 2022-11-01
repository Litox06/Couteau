import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/swissKnife.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("Age")}
          style={[styles.button, styles.age]}
        >
          <Text style={styles.text}>Edad</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.gender]}
          onPress={() => navigation.navigate("Gender")}
        >
          <Text style={styles.text}>Genero</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.universities]}
          onPress={() => navigation.navigate("Universities")}
        >
          <Text style={styles.text}>Universidades</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.weather]}
          onPress={() => navigation.navigate("Weather")}
        >
          <Text style={styles.text}>Clima</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.about]}
          onPress={() => navigation.navigate("About")}
        >
          <Text style={styles.text}>Acerca de</Text>
        </TouchableOpacity>
      </ImageBackground>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    alignItems: "center",
    padding: 7,
    color: "black",
  },
  age: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
    position: "absolute",
    marginLeft: 255,
    marginTop: 40,
  },
  gender: {
    position: "absolute",
    marginLeft: 250,
    marginTop: 165,
    transform: [{ rotate: "50deg" }],
  },
  universities: {
    position: "absolute",
    marginLeft: 10,
    marginTop: 145,
    transform: [{ rotate: "50deg" }],
  },
  weather: {
    position: "absolute",
    marginLeft: 40,
    marginTop: 260,
  },
  about: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 400,
  },
});
