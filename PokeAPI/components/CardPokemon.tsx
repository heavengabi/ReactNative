import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CardPokemon = ({ item }: { item: { name: string; url: string } }) => {
  // Extrai o ID do Pokémon através da URL da API
  const pokemonId = item.url.split("/").filter(Boolean).pop();
  
  // Cria o link dinâmico da imagem usando Template Literals (crases)
  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.imagem} />
      <Text style={styles.nome}>{item.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 8,
    padding: 12,
    backgroundColor: "#f5f5f5",
    borderRadius: 8,
  },
  imagem: {
    width: 96,
    height: 96,
  },
  nome: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 8,
  },
});

export default CardPokemon;