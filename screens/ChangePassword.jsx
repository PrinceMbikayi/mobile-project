import { View, Text } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
} from "../style/style";
import { useState } from "react";
import { Button, TextInput } from "react-native-paper";
import Header from "../components/Header";

const ChangePassword = ({ navigation }) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const loading = false;

  const submitHandler = () => {
    alert("Yeah");
  };

  return (
    <View style={defaultStyle}>
      {/* Heading */}
      <Header back={true} />

      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Change PAssword</Text>
      </View>

      <View style={styles.container}>
        <TextInput
          {...inputOptions}
          placeholder="Old Password"
          secureTextEntry={true}
          value={oldPassword}
          onChangeText={setOldPassword}
        />

        <TextInput
          {...inputOptions}
          placeholder="New Password"
          secureTextEntry={true}
          value={newPassword}
          onChangeText={setNewPassword}
        />

        <Button
          loading={loading}
          textColor={colors.color2}
          disabled={oldPassword === "" || newPassword === ""}
          style={styles.btn}
          onPress={submitHandler}
        >
          Change
        </Button>
      </View>
    </View>
  );
};

export default ChangePassword;
