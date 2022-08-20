import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pantalla de incio</Text>
      <Text>ej : listado de productos</Text>
      <Button
        title="ver detalle"
        onPress={() => navigation.navigate("Detalle")}
      />
    </View>
  );
};

export default Home;
