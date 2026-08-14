import { StyleSheet, View, TextInput, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import CardPokemon from "./CardPokemon";

const TelaPokemon = () => {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState<any[]>([]);

  const filtrar = pokemon.filter((item) =>
    item.name.toLowerCase().includes(nome.toLowerCase())
  );

  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        console.log("Buscando dados da API");
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const dados = await response.json();
        const quantidade = dados.results.slice(0, 10);
        setPokemon(quantidade);
      } catch (erro) {
        console.log("Não foi possível buscar dados", erro);
      }
    };
    buscarPokemon();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        placeholder="Busque seu Pokémon"
        onChangeText={setNome}
      />

      <FlatList
        data={filtrar}
        keyExtractor={(item) => item.name} // Ajustado para item.name
        numColumns={2}
        renderItem={({ item }) => <CardPokemon item={item} />}
      />
    </View>
  );
};

export default TelaPokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
  },
});