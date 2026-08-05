import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Botao from "../components/Botao";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <ImageBackground
          style={styles.wallpaper}
          source={{
            uri: "",
          }}
          resizeMode="cover"
        >
          <Text style={styles.text1}>
            Exercícios da UC15 - Desenvolver e organizar interface gráfica para
            dispositivos móveis
          </Text>

          <Botao title="AULA 1" onPress={() => navigation.navigate("Aula1")} />
          <Botao title="AULA 2" onPress={() => navigation.navigate("Aula2")} />
          <Botao title="AULA 3" onPress={() => navigation.navigate("Aula3")} />
          <Botao title="AULA 4" onPress={() => navigation.navigate("Aula4")} />
          <Botao title="AULA 5" onPress={() => navigation.navigate("Aula5")} />
          <Botao title="AULA 6" onPress={() => navigation.navigate("Aula6")} />
          <Botao title="AULA 7" onPress={() => navigation.navigate("Aula7")} />
          <Botao title="AULA 8" onPress={() => navigation.navigate("Aula8")} />

          <StatusBar style="light" />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wallpaper: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
    paddingTop: 60,
  },

  text1: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 30,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },

  scroll: {
    flex: 1,
    width: "100%",
  },

  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
});
