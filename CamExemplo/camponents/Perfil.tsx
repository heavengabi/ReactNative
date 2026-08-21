import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Alert,
  FlatList,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

const Perfil = () => {
  const [foto, setFoto] = useState<string>();
  const [fotos, setFotos] = useState<string[]>([]);
  const escolherDaGaleria = async () => {
    const resultado = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      allowsEditing: false,
      aspect: [1, 1],
      allowsMultipleSelection: true,
      selectionLimit: 10,
      quality: 0.8,
    });
    if (!resultado.canceled) {
      const uris = resultado.assets.map((item) => item.uri);
      setFotos(uris);
    }
  };

  const usarCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    const resultado = await ImagePicker.launchCameraAsync({
      mediaTypes: ["images"],
      allowsEditing: true,
      quality: 0.8,
    });
    if (!resultado.canceled) {
      setFoto(resultado.assets[0].uri);
    }
    if (status != "granted") {
      Alert.alert(
        "Permissão é necessária para continuar, seu burro, seu animal de teta, chinelão",
      );
      return;
    }
  };
  return (
    <View>
        
      <View style={{ padding: 20 }}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar..."
          placeholderTextColor="#888"
        />
      </View>
      <TouchableOpacity onPress={escolherDaGaleria}>
        <Text>Escolher foto</Text>
      </TouchableOpacity>

      {foto && <Image style={styles.foto} source={{ uri: foto }} />}

      {fotos.length > 0 && (
        <FlatList
          data={fotos}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Image style={styles.preview} source={{ uri: item }} />
          )}
        />
      )}

      <TouchableOpacity onPress={usarCamera}>
        <Text>Tire uma foto</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  foto: {
    width: 400,
    height: 400,
  },
  preview: {
    width: 400,
    height: 400,
  },
});
