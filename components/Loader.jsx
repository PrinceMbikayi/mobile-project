import { StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { colors } from "../style/style";

const Loader = () => {
  return (
    <ActivityIndicator
      style={{
        top: "50%",
        position: "absolute",
        alignSelf: "center",
      }}
      size={100}
      color={colors.color3}
    />
  );
};

const styles = StyleSheet.create({});

export default Loader;
