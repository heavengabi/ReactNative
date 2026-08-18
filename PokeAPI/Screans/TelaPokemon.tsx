import { StyleSheet, TextInput, FlatList,Button, View } from "react-native";
import React, { useEffect, useState } from "react";
import CardPokemon from "../components/CardPokemon";
import { SafeAreaView } from "react-native-safe-area-context";


const TelaPokemon = ({ navigation }: any) => {
  const [nome, setNome] = useState("");
  const [pokemon, setPokemon] = useState<any[]>([]);

  const filtrar = pokemon.filter((item) =>
    item.name.toLowerCase().includes(nome.toLowerCase()),
  );

  useEffect(() => {
    const buscarPokemon = async () => {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");

        const dados = await response.json();

        const quantidade = dados.results.slice(0, 20);

        setPokemon(quantidade);
      } catch (erro) {
        console.log("Não foi possível buscar dados", erro);
      }
    };

    buscarPokemon();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        value={nome}
        placeholder="🔍  Busque seu Pokémon"
        placeholderTextColor="#777"
        onChangeText={setNome}
      />

      <FlatList
        data={filtrar}
        keyExtractor={(item) => item.name}
        numColumns={2}
        renderItem={({ item }) => <CardPokemon item={item} />}
        contentContainerStyle={styles.lista}
        columnWrapperStyle={styles.linha}
        showsVerticalScrollIndicator={false}
      />

      <View>
        <Button
          title="Voltar"
          onPress={() => navigation.navigate("Tela Inicial")}
        />
      </View>
    </SafeAreaView>
  );
};

export default TelaPokemon;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  input: {
    height: 58,
    width: "60%",
    alignSelf: "center",

    backgroundColor: "#FFFFFF",
    borderRadius: 30,
    paddingHorizontal: 20,
    marginTop: 10,
    marginBottom: 18,

    borderWidth: 3,
    borderColor: "#2A75BB",

    fontSize: 15,
    color: "#222",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  lista: {
    paddingBottom: 25,
    paddingHorizontal: 8,
  },

  linha: {
    justifyContent: "space-between",
    marginBottom: 15,
  },
});
