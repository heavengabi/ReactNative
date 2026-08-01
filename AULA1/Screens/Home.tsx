import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ImageBackground,
} from "react-native";
import Botao from "../components/Botao";

export default function Home({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.wallpaper}
        source={{
          uri: "https://i.pinimg.com/originals/33/84/f0/3384f0e90d77d69e4957d8d5158877fc.gif",
        }}
        resizeMode="cover"
      >
        <Text style={styles.text1} numberOfLines={4}>
          UC15 - Desenvolver e organizar interface gráfica para dispositivos
          móveis
        </Text>
        <Botao
          title="AULA 1"
          onPress={() => navigation.navigate("Aula1")}
        />

        <Botao
          title="AULA 2"
          onPress={() => navigation.navigate("Aula2")}

        />

        <StatusBar style="light" />
      </ImageBackground>
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
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  text1: {
    fontSize: 30,
    textAlign: "center",
    fontWeight: "bold",
    textTransform: "uppercase",
    color: "#fff",
    marginBottom: 40,
    textShadowColor: "#000",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
});
