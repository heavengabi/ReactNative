import { StyleSheet, Text, View } from "react-native";
import React from "react";

type Props = {
  id: number;
  nome: string;
  email: string;
};
const CardUsuario = ({ id, nome, email }: Props) => {
  return (
    <View style={styles.container}>
      <Text>{id}</Text>
      <Text>{nome}</Text>
      <Text>{email}</Text>
    </View>
  );
};

export default CardUsuario;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "pink",
    padding: 5,
    borderRadius: 5,
  },
});
