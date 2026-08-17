import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  item: {
    name: string;
    url: string;
  };
};

const CardPokemon = ({ item }: Props) => {
  const pokemonId = item.url.split("/").filter(Boolean).pop();

  const imageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;

  return (
    <View style={styles.card}>
      <Image source={{ uri: imageUrl }} style={styles.imagem} />

      <Text style={styles.nome}>{item.name}</Text>
    </View>
  );
};

export default CardPokemon;

const styles = StyleSheet.create({
  card: {
    width: "46%",
    height: 190,
    marginHorizontal: "2%",
    marginBottom: 10,
    backgroundColor: "#c066fc",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 130,
    height: 150,
    resizeMode: "contain",
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 8,
  },
});
