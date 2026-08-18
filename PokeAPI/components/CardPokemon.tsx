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
    height: 180,
    marginHorizontal: "2%",
    marginBottom: 10,

    backgroundColor: "#FFFFFF",

    borderRadius: 18,
    borderWidth: 3,
    borderColor: "#FFCB05",

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },

  imagem: {
    width: 115,
    height: 115,
    resizeMode: "contain",
  },

  nome: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    marginTop: 8,
    color: "#2A75BB",
  },
});
