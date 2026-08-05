import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import CardProduto from "./Components/CardProduto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Ionicons } from "@react-native-vector-icons/ionicons";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Shop</Text>
          <Pressable>
            <Ionicons name="cart-outline" size={30} color="black" />
          </Pressable>
        </View>
        <ScrollView>
          <View style={styles.conteudo}>
            <Text style={styles.descricao}>Escolha o seu pastel favorito!</Text>

            <View style={styles.container}>
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />{" "}
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />
              {/* resto dos cards */}
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "bold",
  },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    paddingBottom: 20,
    gap: 15,
  },
  descricao: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "500",
    paddi
  },
});
