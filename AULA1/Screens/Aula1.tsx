import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ImageBackground,
  StatusBar,
} from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import Imagem from "../components/Imagem";
import Botao from "../components/Botao";
import Cartao from "../components/Cartao";
const Aula1 = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Imagem
          image={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHVcAY8Al-AkPXykR1Zd79JZ0HqwQgpzCUaN1rqfKC2X841j2Yqti",
          }}
        />
        <Cartao></Cartao>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Aula1;

const styles = StyleSheet.create({});
