import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const Interruptor = () => {
  const [desligar, setDesligar] = useState("desligado");

  function troca() 
  {
    if (desligar === "desligado") {
      setDesligar("ligado");
    } else {
      setDesligar("desligado");
    }
  }
  return (
    <View>
      <Text>O interruptor está: {desligar} </Text>
      <TouchableOpacity style={styles.btn} onPress={() => troca()}>
        <Text>Clique</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Interruptor;

const styles = StyleSheet.create({
  btn: {
    padding: 5,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 50,
    bottom: -50,
    borderRadius: 10,
  },
});
