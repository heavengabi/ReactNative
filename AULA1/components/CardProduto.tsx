import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React from "react";

type Props = {
  foto: string;
  nome: string;
  preco: string;
};

const CardProduto = ({ foto, nome, preco }: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.foto} source={{ uri: foto }} resizeMode="cover" />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.nome} numberOfLines={2}>
          {nome}
        </Text>
        <View style={styles.precoBadge}>
          <Text style={styles.preco}>{preco}</Text>
        </View>
      </View>
      <Pressable style={styles.btn}></Pressable>
    </View>
  );
};

export default CardProduto;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height:200,
    backgroundColor: "#FFFFFF",
    padding: 12,
    alignItems: "center",
    borderRadius:10,
    elevation: 6,
    shadowOpacity: 0.1,
    shadowRadius: 12,
    margin:10
  },

  imageContainer: {
    width: 100,
    height: 90,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#F8F9FA",
  },

  foto: {
    width: "100%",
    height: "100%",
  },

  infoContainer: {
    width: "100%",
    alignItems: "center",
    marginTop: 12,
  },

  nome: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1A1A1A",
    textAlign: "center",
    lineHeight: 22,
    marginBottom: 8,
  },

  precoBadge: {
    backgroundColor: "#E8F5E9",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },

  preco: {
    fontSize: 18,
    fontWeight: "800",
    color: "#2E7D32",
  },
  btn: {
    width: 40,
    height: 30,
    borderStartColor: "red",
  },
});
