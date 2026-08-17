import { StyleSheet, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";
import { SafeAreaView } from "react-native-safe-area-context";

const TelaPokemon = () => {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState<any[]>([]);

  const filtrar = pokemon.filter((item) =>
    item.name.toLowerCase().includes(nome.toLowerCase()),
  );

  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");

        const dados = await response.json();

        const quantidade = dados.results.slice(0, 20);

        setPokemon(quantidade);
      } catch (erro) {
        console.log("Não foi possível buscar dados", erro);
      }
    };

    buscarPokemon();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        placeholder="🔍  Busque seu Pokémon"
        onChangeText={setNome}
      />

      <FlatList
        data={filtrar}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => <CardPokemon item={item} />}
        contentContainerStyle={styles.lista}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default TelaPokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e4c2ff",
    alignItems:"center"
  },

  input: {
    height: 50,
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 15,
  },

  lista: {
    paddingBottom: 20,
  },
});
