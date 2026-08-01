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
    <SafeAreaView style={styles.screen}>
      
      <View style={styles.container}>
        <Image
          style={styles.foto}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcS-GM0XGQXFTl3bi6d13IsmqNod-HkwJ7O5Xzg2YFYg&s=10",
          }}
        />

        <View style={styles.info}>
          <Text style={styles.text1}>Nome</Text>

          <Text style={styles.text2} numberOfLines={2}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            officiis quis modi quisquam molestias?
          </Text>

          <TouchableOpacity style={styles.btn}>
            <Text style={styles.btnText}>Seguir</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CartaoPerfil;

const styles = StyleSheet.create({
  screen: {
    justifyContent: "center",
    alignItems: "center",
    marginTop:20
  },

  container: {
    width: 340,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9B6C7",
    borderRadius: 20,
    padding: 15,
    
  },

  foto: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginRight: 15,
  },

  info: {
    flex: 1,
  },

  text1: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFF",
    marginBottom: 6,
  },

  text2: {
    fontSize: 14,
    color: "#FFF",
    marginBottom: 15,
  },

  btn: {
    width: 110,
    height: 38,
    borderRadius: 20,
    backgroundColor: "#FF5C8A",
    justifyContent: "center",
    alignItems: "center",
  },

  btnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});