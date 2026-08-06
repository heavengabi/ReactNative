import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Contador from "./components/Contador";
import Interruptor from "./components/Interruptor";
import Calcular from "./components/Calcular";
export default function App() {
  return (
    <View style={styles.container}>
      <Calcular/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
