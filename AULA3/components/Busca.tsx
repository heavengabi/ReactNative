import { FlatList, StyleSheet, TextInput, View } from "react-native";
import React, { useState } from "react";
import CardProduto from "./CardProduto";

const produtos = [
  {
    id: "1",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10",
    nome: "Pastel",
    preco: "7,00",
  },
  {
    id: "2",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7r6e-qvOofshjcQaKrHhdWUwdpakt37gjBPhLrgkDv5YkEL50J6kTDYp&s=10",
    nome: "Coxinha",
    preco: "3,00",
  },
  {
    id: "3",
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lTrdyaXSmhinLmhpU8LxFV3pPyqC-MpDRyOtx5MNSg&s=10",
    nome: "Café",
    preco: "5,00",
  },
];

const Busca = () => {
  const [nomeProduto, setNomeProduto] = useState("");

  const encontrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(nomeProduto.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nomeProduto}
        placeholder="Que produto deseja?"
        onChangeText={setNomeProduto}
      />

      <FlatList
        data={encontrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <CardProduto
            id={Number(item.id)}
            nome={item.nome}
            foto={item.foto}
            preco={item.preco}
          />
        )}
      />
    </View>
  );
};

export default Busca;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F9FC",
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  input: {
    width: "100%",
    height: 52,
    backgroundColor: "#FFF",
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#F5A623",
    paddingHorizontal: 18,
    fontSize: 16,
    color: "#333",
    marginBottom: 20,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,

    elevation: 4,
  },

  lista: {
    paddingBottom: 20,
  },

  row: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});