import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

// importamos las pantallas que vamos a agrupar
import Favorito from "../pantallas/Favoritos";
import Login from "../pantallas/Login";
import Register from "../pantallas/Register";

const Stack = createNativeStackNavigator();

const GrupoFavoritos = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Mi lista" component={Favorito} />
      <Stack.Screen name="Ingreso a cuenta" component={Login} />
      <Stack.Screen name="Registro de cuenta" component={Register} />
    </Stack.Navigator>
  );
};

export default GrupoFavoritos;
