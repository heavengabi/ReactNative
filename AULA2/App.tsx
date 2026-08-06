import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import CardProduto from "./Components/CardProduto";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import PaperBag from "lucide-react-native/icons/paper-bag";
export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Cardápio</Text>
          <Pressable>
            <PaperBag color={"black"}/>
          </Pressable>
        </View>
        <ScrollView>
          <View>
            <Text style={styles.descricao}>Faça seu pedido!</Text>

            <View style={styles.container}>
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi6UjeyWIC8hhB3zpZ_MuKBtVi4qK2rGxrHQ5RZOR-6dGsUANZHQCf-GDk&s=10"
                nome="Pastel"
                preco="R$ 7,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS7r6e-qvOofshjcQaKrHhdWUwdpakt37gjBPhLrgkDv5YkEL50J6kTDYp&s=10"
                nome="Coxinha"
                preco="R$ 5,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9Wzvb7yl7FJyaN4ZQMBE6KOP1dVVKkzigRbv4HaZ8lnz3SwHgNYyCJu8&s=10"
                nome="Pão de queijo"
                preco="R$ 3,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_lTrdyaXSmhinLmhpU8LxFV3pPyqC-MpDRyOtx5MNSg&s=10"
                nome="Café"
                preco="R$ 5,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXiYM1vUjzc_ZmPvsLcWJfOi762kpeuc3lPEv4g78BEQwtRLr1ttFA6gk&s=10"
                nome="Panqueca"
                preco="R$ 10,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZW_WH1minMJ8wrJgUiC0XG-nMZSK1SZCYrDHp77OMF7ySGcO5KXF4xQM&s=10"
                nome="Sanduíche"
                preco="R$ 12,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9KEKzLVcnhuXIA8QcbX5hIFjO7ONlGCF4r1YoL7utg&s=10"
                nome="Misto quente"
                preco="R$ 10,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9H60kAem78qwfIARiNj6TfmKollLNBVB65_sdNOImswGuFi_cVvCET4Sj&s=10"
                nome="Salada de fruta"
                preco="R$ 7,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcahZtPsQw0HFtWOHm2Vp2lh4c2u8vQm79rfKx6ww5fg&s=10"
                nome="Suco de laranja"
                preco="R$ 5,00"
              />
              <CardProduto
                foto="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2o14FL3KffY9MaM4K4tDM9jLSxJ12-_ZaAIZpJdqChvftDql791ZVc8&s=10"
                nome="Fatia de bolo"
                preco="R$ 10,00"
              />
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
    gap: 5,
  },
  descricao: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: "500",
    padding: 10,
    right: -10,
  },
});
