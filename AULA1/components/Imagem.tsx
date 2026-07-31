import { Image, ImageSourcePropType, StyleSheet } from "react-native";

type Props = {
  image: ImageSourcePropType;
};

export default function Imagem({ image }: Props) {
  return (
    <Image
      source={image}
      style={styles.foto}
      resizeMode="cover"
    />
  );
}

const styles = StyleSheet.create({
  foto: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});