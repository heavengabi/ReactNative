import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CartaoPerfil = () => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Image
          style={styles.foto}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcS-GM0XGQXFTl3bi6d13IsmqNod-HkwJ7O5Xzg2YFYg&s=10",
          }}
        />

        <Text style={styles.text1}>Nome</Text>

        <Text style={styles.text2} numberOfLines={2}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel officiis
          quis modi quisquam molestias?
        </Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Seguir</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CartaoPerfil;

const styles = StyleSheet.create({

  container: {
    width: 300,
    padding: 20,
    borderRadius: 20,
    backgroundColor: "pink",
    alignItems: "center",
  },

  foto: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
  },

  text1: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
    marginBottom: 10,
  },

  text2: {
    fontSize: 15,
    color: "white",
    textAlign: "center",
    marginBottom: 30,
  },

  btn: {
    width: 120,
    height: 40,
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});