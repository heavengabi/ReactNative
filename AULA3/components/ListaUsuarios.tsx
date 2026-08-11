import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import CardUsuario from "./CardUsuario";

const dadosUsuarios = [
  { id: 1, nome: "Gabi", email: "gabi123@gmail.com" },
  { id: 2, nome: "Erica", email: "erica123@gmail.com" },
  { id: 3, nome: "Eduardo", email: "eduardo123@gmail.com" },
  { id: 4, nome: "Miguel", email: "miguel123@gmail.com" },
];
const ListaUsuarios = () => {
  return (
    <View>
      <FlatList
        data={dadosUsuarios}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <CardUsuario
            id={Number(item.id)}
            nome={item.nome}
            email={item.email}
          />
        )}
      />
    </View>
  );
};

export default ListaUsuarios;

const styles = StyleSheet.create({});
