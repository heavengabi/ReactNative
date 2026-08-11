import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState } from "react";

import CardProduto from "./CardProduto";
import Busca from "./Busca";

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

const ListarProdutos = () => {
  const [nomeProduto, setNomeProduto] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(nomeProduto.toLowerCase()),
  );
  return (
    <View>
      <Busca/>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <CardProduto
            id={Number(item.id)}
            foto={item.foto}
            nome={item.nome}
            preco={item.preco}
          />
        )}
      />
    </View>
  );
};

export default ListarProdutos;

const styles = StyleSheet.create({});
