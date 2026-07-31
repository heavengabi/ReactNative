import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Imagem from "./Imagem";
type Props = {};
const Cartao = () => {
  return (
    <View style={styles.container}>
      <Imagem
        image={{
          uri: "https://static.nationalgeographicbrasil.com/files/styles/image_3200/public/inpicsbrazilom10511-enhanced-sr-copyukhr.webp?w=1600&h=2400",
        }}
      />
      <Text style={styles.text1} numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, assumenda
        saepe quia esse, laboriosam similique ad nemo recusandae facilis,
        molestiae nostrum? Maxime magnam temporibus fugiat harum fugit quis nemo
        libero.
      </Text>

      <Pressable style={styles.btn}>
        <Text numberOfLines={2}>adsdsasad</Text>
      </Pressable>
    </View>
  );
};

export default Cartao;

const styles = StyleSheet.create({
  container: {
    width: 150,
    height: 200,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  btn: {
    width: 100,
    backgroundColor: "blue",
  },
  text1:{}
});
