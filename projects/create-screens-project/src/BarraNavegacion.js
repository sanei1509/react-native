import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// importamos el envoltorio (wrapper de toda nuestra app)
import { NavigationContainer } from "@react-navigation/native";

// importamos los grupos de pantallas a manejar no pantallas individuales
import GrupoHome from "../src/relacion-pantallas(stack)/GrupoHome";
import GrupoFavoritos from "../src/relacion-pantallas(stack)/GrupoFavoritos";
import Cuenta from "../src/pantallas/Cuenta";

const Tab = createBottomTabNavigator();

const BarraNavegacion = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="favoritos" component={GrupoFavoritos} />
        <Tab.Screen name="home" component={GrupoHome} />
        <Tab.Screen
          name="Mi cuenta"
          component={Cuenta}
          options={{ headerShown: true }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BarraNavegacion;
