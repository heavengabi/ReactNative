import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const EscolherFoto = () => {
  const [foto, setFoto] = useState<string>();
  const escolherDaGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
  };
  return (
    <View>
      <TouchableOpacity onPress={escolherDaGaleria}>
        <Text>Escolher foto</Text>
      </TouchableOpacity>
      {foto && <Image style = {styles.foto}source = {{uri: foto}}/>}
    </View>
  );
};

export default EscolherFoto;

const styles = StyleSheet.create({
foto:{
    width:400,
    height:400
}
    
});
