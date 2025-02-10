import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../style/style";
import { Avatar } from "react-native-paper";

const ImageCard = ({ src, id, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: src }}
        style={{
          width: "100%",
          height: "80%",
          resizeMode: "contain",
        }}
      />
      <TouchableOpacity onPress={() => deleteHandler(id)}>
        <Avatar.Icon size={30} icon={"delete"} style={{
            backgroundColor: colors.color1,
        }} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.color2,
    elevation: 5,
    margin: 10,
    padding: 15,
    alignItems: "center",
    backgroundColor: 10,
    height: 300,
  },
});

export default ImageCard;
