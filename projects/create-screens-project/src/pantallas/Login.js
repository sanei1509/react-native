import React from "react";
import { View, Text, TextInput, Button } from "react-native";

const Login = () => {
  return (
    <View>
      <Text>Inicio de sesión del usuario</Text>
      <TextInput>Nombre de usuario</TextInput>
      <TextInput>Contraseña</TextInput>
      <Button title="Iniciar sesión" />
    </View>
  );
};

export default Login;
