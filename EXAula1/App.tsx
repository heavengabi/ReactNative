import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import CartaoPerfil from "./Components/CartaoPerfil";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Explorar Perfis</Text>
          <Text style={styles.subtitulo}>
            Conheça novos amigos da comunidade
          </Text>

          <View style={styles.search}>
            <Ionicons name="search" size={22} color="#000" />
            <TextInput
              placeholder="Pesquisar perfis..."
              placeholderTextColor="#000"
              style={styles.input}
            />
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        >
          <CartaoPerfil />
          <CartaoPerfil />
          <CartaoPerfil />
          <CartaoPerfil />
        </ScrollView>

        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffd7e8",
  },

  header: {
    paddingHorizontal: 20,
    paddingTop: 15,
    paddingBottom: 15,
  },

  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#ffb5ca",
  },

  subtitulo: {
    fontSize: 16,
    color: "#000000",
    marginTop: 5,
    marginBottom: 20,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F9B6C7",
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 50,

  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },

  lista: {
    padding: 20,
    gap: 15,

  },
});