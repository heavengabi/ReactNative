import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Cartao from "../components/Cartao";
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
            <Ionicons name="search" size={20} color="#64748B" />
            <TextInput
              placeholder="Pesquisar perfis..."
              placeholderTextColor="#94A3B8"
              style={styles.input}
            />
          </View>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.lista}
        >
          <Cartao
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqQ9cwXubnxAOLjyFgN4LEmcMkZr-jQ_RBmHu7oqvPiQ&s"
            name="Luiza Oliveira"
            description="Apaixonada por viagens e fotografia. Adoro explorar novos lugares e capturar momentos especiais."
          />

          <Cartao
            image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgqG9i4zb-hKEJSMi666b8JOmSZBqFc6OJJNx98aShmA&s=10"
            name="Carlos Silva"
            description="Engenheiro de software com experiência em desenvolvimento web e mobile."
          />

          <Cartao
            image="https://img.somake.ai/cdn-cgi/image/width=800,quality=80,format=auto,fit=scale-down/tools/examples/face-generator_gallery_1763099237_3953.jpg"
            name="Lucas Pereira"
            description="Desenvolvedor de software e entusiasta de tecnologia."
          />

          <Cartao
            image="https://img.somake.ai/cdn-cgi/image/width=800,quality=80,format=auto,fit=scale-down/tools/examples/face-generator_gallery_1763099171_2969.jpg"
            name="Joice Santos"
            description="Cozinheira apaixonada por gastronomia."
          />
        </ScrollView>

        <StatusBar style="dark" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F1F5F9",
  },

  header: {
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 18,
  },

  titulo: {
    fontSize: 30,
    fontWeight: "800",
    color: "#1E3A8A",
  },

  subtitulo: {
    fontSize: 15,
    color: "#64748B",
    marginTop: 6,
    marginBottom: 18,
  },

  search: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    height: 54,
    borderRadius: 18,
    paddingHorizontal: 16,

    borderWidth: 1,
    borderColor: "#E2E8F0",

    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 4,
  },

  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: "#0F172A",
  },

  lista: {
    paddingHorizontal: 22,
    paddingBottom: 25,
    gap: 18,
  },
});