import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos las pantallas que voy a agrupar
import Home from "../pantallas/Home";
import Detalle from "../pantallas/Detalle";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="detalle" component={Detalle} />
    </Stack.Navigator>
  );
};

export default HomeStack;
