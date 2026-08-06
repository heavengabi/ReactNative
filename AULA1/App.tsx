import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./Screens/Home";
import Aula1 from "./Screens/Exercicio1";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Aula1" component={Aula1} />
        <Stack.Screen name = 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
