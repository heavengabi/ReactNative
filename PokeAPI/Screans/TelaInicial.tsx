import { StyleSheet, View, Image, Button } from 'react-native';
import React from 'react';
import logo from "../assets/logo.png";

const TelaInicial = ({navigation}:any) => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />

      <Button title="Entrar"
      onPress={()=>navigation.navigate('Tela Pokemon')}
      />
    </View>
  );
};

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
});