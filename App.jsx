import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Gender from "./Screens/Gender";
import Age from "./Screens/Age";
import Universities from "./Screens/Universities";
import Weather from "./Screens/Weather";
import About from "./Screens/About";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle={"light-content"} />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }}
          />

          <Stack.Screen
            name="Gender"
            component={Gender}
            options={{ title: "Genero" }}
          />
          <Stack.Screen name="Age" component={Age} options={{ title: "Age" }} />
          <Stack.Screen
            name="Universities"
            component={Universities}
            options={{ title: "Universidades" }}
          />
          <Stack.Screen
            name="Weather"
            component={Weather}
            options={{ title: "Clima" }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "Acerca de " }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
