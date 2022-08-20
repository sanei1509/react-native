import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// importamos las pantallas que voy a agrupar
import Home from "../pantallas/Home";
import Detalle from "../pantallas/Detalle";

const Stack = createNativeStackNavigator();

const GrupoHome = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detalle" component={Detalle} />
    </Stack.Navigator>
  );
};

export default GrupoHome;
