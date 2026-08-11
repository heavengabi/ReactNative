import { StyleSheet, Text, View } from "react-native";
import ListaUsuarios from "./components/listaUsuarios";
import ListarProdutos from "./components/ListarProdutos";
import React from "react";
export default function App() {
  return (

      <View style={styles.container}>
        <ListarProdutos />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
