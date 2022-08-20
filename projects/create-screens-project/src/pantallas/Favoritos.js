import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Favoritos = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>Mi lista</Text>
      <Text>Listado favoritos del usuario</Text>

      <Text>No tenes cuenta ?</Text>
      <Button
        title="Inicia sesión"
        onPress={() => navigation.navigate("Ingreso a cuenta")}
      />
      <Text style={{ textAlign: "center" }}>O</Text>
      <Button
        title="Registrate aca"
        onPress={() => navigation.navigate("Registro de cuenta")}
      />
    </View>
  );
};

export default Favoritos;
