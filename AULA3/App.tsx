import { StyleSheet, Text, View } from "react-native";

import ListarProdutos from "./components/ListarProdutos";
import React from "react";
import Busca from "./components/Busca";
export default function App() {
  return (
    <View style={styles.container}>
      <Busca/>
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
