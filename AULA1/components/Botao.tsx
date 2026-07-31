import { Pressable, StyleSheet, Text } from "react-native";

type Props = {
  title: string;
  onPress: () => void;
};

export default function Botao({ title, onPress }: Props) {
  return (
    <Pressable style={styles.botao} onPress={onPress}>
      <Text style={styles.text3}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  botao: {
    width: 180,
    height: 55,
    backgroundColor: "#c33b80",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    margin:10
  },

  text3: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});