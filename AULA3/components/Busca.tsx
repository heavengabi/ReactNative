import { FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

type Props = {
  id: number;
  foto: string;
  nome: string;
  preco: string;
};

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
  const [encontrados, setEncontrados] = useState(produtos);

  function procurar(texto: string) {
    setNomeProduto(texto);

    const listaFiltrada = produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(texto.toLowerCase()),
    );

    setEncontrados(listaFiltrada);
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nomeProduto}
        placeholder="Que produto deseja?"
        onChangeText={procurar} // Chama a função a cada letra digitada
      />
    </View>
  );
};

export default Busca;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
});
