import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  image: string;
  name: string;
  description: string;
};

const CartaoPerfil = ({ image, name, description }: Props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Image
          style={styles.foto}
          source={{
            uri: image,
          }}
        />

        <View style={styles.info}>
          <View style={styles.topo}>
            <Text style={styles.text1}>{name}</Text>

            <View style={styles.online}>
              <Ionicons name="ellipse" size={10} color="#22C55E" />
              <Text style={styles.onlineText}>Online</Text>
            </View>
          </View>

          <Text style={styles.text2} numberOfLines={2}>
            {description}
          </Text>

          <TouchableOpacity style={styles.btn}>
            <Ionicons name="person-add" size={18} color="#FFF" />
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
    alignItems: "center",
  },

  container: {
    width: 340,
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    padding: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 12,

  },

  foto: {
    width: 78,
    height: 78,
    borderRadius: 39,
    marginRight: 16,
  },

  info: {
    flex: 1,
  },

  topo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text1: {
    fontSize: 20,
    fontWeight: "700",
    color: "#0F172A",
    flex: 1,
  },

  online: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },

  onlineText: {
    fontSize: 12,
    color: "#22C55E",
    fontWeight: "600",
  },

  text2: {
    fontSize: 14,
    color: "#64748B",
    lineHeight: 20,
    marginBottom: 14,
  },

  btn: {
    backgroundColor: "#2563EB",
    height: 42,
    width: 120,
    borderRadius: 14,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 6,
  },

  btnText: {
    color: "#FFF",
    fontSize: 15,
    fontWeight: "700",
  },
});