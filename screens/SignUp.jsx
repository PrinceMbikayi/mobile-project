import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  formStyles as styles,
  defaultImg,
} from "../style/style";
import { useEffect, useState } from "react";
import { Avatar, Button, TextInput } from "react-native-paper";
import Footer from "../components/Footer";

const SignUp = ({ navigation, route }) => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [pinCode, setPinCode] = useState("");

  const loading = false;

  const disableBtn =
    !name || !email || !password || !address || !city || !country || !pinCode;

  const submitHandler = () => {
    alert("Yeah");
  };

  useEffect(() => {
    if (route.params?.image) {
      setAvatar(route.params.image);
    }
  }, [route.params]);

  return (
    <>
      <View style={{ ...defaultStyle, backgroundColor: colors.color2 }}>
        {/* Heading */}
        <View style={{ marginBottom: 20 }}>
          <Text style={formHeading}>Sign Up</Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View style={{ minHeight: 900 }}>
            <Avatar.Image
              style={{ alignSelf: "center", backgroundColor: colors.color1 }}
              size={80}
              source={{ uri: avatar ? avatar : defaultImg }}
            />

            <TouchableOpacity onPress={() => navigation.navigate("camera")}>
              <Button textColor={colors.color1}>Change Photo</Button>
            </TouchableOpacity>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              keyboardType="email-address"
              onChangeText={setName}
            />

            <TextInput
              {...inputOptions}
              placeholder="Email"
              value={email}
              keyboardType="email-address"
              onChangeText={setEmail}
            />

            <TextInput
              {...inputOptions}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />

            <TextInput
              {...inputOptions}
              placeholder="Address"
              value={address}
              onChangeText={setAddress}
            />

            <TextInput
              {...inputOptions}
              placeholder="City"
              value={city}
              onChangeText={setCity}
            />

            <TextInput
              {...inputOptions}
              placeholder="Country"
              value={country}
              onChangeText={setCountry}
            />

            <TextInput
              {...inputOptions}
              placeholder="Pin Code"
              value={pinCode}
              onChangeText={setPinCode}
            />

            <Button
              loading={!!loading}
              textColor={colors.color2}
              disabled={disableBtn}
              style={styles.btn}
              onPress={submitHandler}
            >
              Sign Up
            </Button>
            <Text style={styles.or}>OR</Text>

            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("login")}
            >
              <Text style={styles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Footer activeRoute="profile" />
    </>
  );
};

export default SignUp;
