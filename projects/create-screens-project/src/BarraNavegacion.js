import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// importamos el envoltorio (wrapper de toda nuestra app)
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "react-native-vector-icons";

// importamos los grupos de pantallas a manejar no pantallas individuales
import GrupoHome from "../src/relacion-pantallas(stack)/GrupoHome";
import GrupoFavoritos from "../src/relacion-pantallas(stack)/GrupoFavoritos";
import Cuenta from "../src/pantallas/Cuenta";

const Tab = createBottomTabNavigator();

const BarraNavegacion = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          name="favoritos"
          component={GrupoFavoritos}
          options={{
            tabBarLabel: "Mi lista",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="bookmark-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="home"
          component={GrupoHome}
          options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Mi cuenta"
          component={Cuenta}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons
                name="person-circle-outline"
                color={color}
                size={size}
              />
            ),
            headerShown: true,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BarraNavegacion;
