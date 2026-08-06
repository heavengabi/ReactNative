import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

const Calcular = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [calcular, setCalcular] = useState(0);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input1}
        value={num1}
        onChangeText={setNum1}
        keyboardType="numeric"
        placeholder="Primeiro número"
      />

      <TextInput
        style={styles.input1}
        value={num2}
        onChangeText={setNum2}
        keyboardType="numeric"
        placeholder="Segundo número"
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setCalcular(Number(num1) + Number(num2))}
      >
        <Text style={styles.calcular}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.text2}>Resultado: {calcular}</Text>
    </View>
  );
};

export default Calcular;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },

  input1: {
    backgroundColor: "white",
    borderRadius: 10,
    margin: 5,
    width: 150,
    height: 40,
    borderColor: "rgba(0, 0, 0, 0.47)",
    borderWidth: 2,
    paddingHorizontal: 10,
  },

  btn: {
    backgroundColor: "white",
    borderRadius: 5,
    width: 100,
    height: 35,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "rgba(0, 0, 0, 0.47)",
    borderWidth: 2,
    marginTop: 10,
  },

  text2: {
    marginTop: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },

  calcular: {
    textTransform: "uppercase",
    fontWeight: "bold",
    fontSize: 12,
  },
});