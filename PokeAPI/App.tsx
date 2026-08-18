import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TelaPokemon from "./Screans/TelaPokemon";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaInicial from "./Screans/TelaInicial";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Tela Inicial">
          <Stack.Screen
            name="Tela Inicial"
            component={TelaInicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Tela Pokemon"
            component={TelaPokemon}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
