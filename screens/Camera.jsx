import { View, Text, TouchableOpacity } from "react-native";
import { CameraView, Camera } from "expo-camera";
import { useState, useEffect } from "react";
import { CameraType } from "expo-image-picker";
import * as ImagePicker from "expo-image-picker";
import { Avatar } from "react-native-paper";
import { colors, defaultStyle } from "../style/style";

const CameraComponent = ({ navigation, route }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState(null);

  const openImagePicker = async () => {
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false)
      return alert("Permission to access gallery is required");

    const data = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (route.params?.newProduct && !data.canceled)
      return navigation.navigate("newproduct", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProduct && !data.canceled)
      return navigation.navigate("productimages", {
        image: data.assets[0].uri,
      });

    if (route.params?.updateProfile && !data.canceled)
      return navigation.navigate("profile", {
        image: data.assets[0].uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.assets[0].uri,
      });
  };

  const clickPicture = async () => {
    const data = await camera.takePictureAsync();

    if (route.params?.newProduct && !data.canceled)
      return navigation.navigate("newproduct", {
        image: data.uri,
      });

    if (route.params?.updateProduct && !data.canceled)
      return navigation.navigate("productimages", {
        image: data.uri,
      });

    if (route.params?.updateProfile && !data.canceled)
      return navigation.navigate("profile", {
        image: data.uri,
      });
    else
      return navigation.navigate("signup", {
        image: data.uri,
      });
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) return <View />;

  if (hasPermission === false)
    return (
      <View style={defaultStyle}>
        <Text>No access to camera</Text>
      </View>
    );

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <CameraView
        type={type}
        style={{
          flex: 1,
          aspectRatio: 1,
        }}
        ratio={"1:1"}
        ref={(e) => setCamera(e)}
      />

      <View
        style={{
          flexDirection: "row",
          bottom: 10,
          width: "100%",
          justifyContent: "space-evenly",
          position: "absolute",
        }}
      >
        <MyIcon icon="image" handler={openImagePicker} />
        <MyIcon icon="camera" handler={clickPicture} />
        <MyIcon
          icon="camera-flip"
          handler={() => {
            setType((prevType) =>
              prevType === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        />
      </View>
    </View>
  );
};

const MyIcon = ({ icon, handler }) => (
  <TouchableOpacity onPress={handler}>
    <Avatar.Icon
      icon={icon}
      size={40}
      color={colors.color2}
      style={{
        backgroundColor: colors.color1,
      }}
    />
  </TouchableOpacity>
);

export default CameraComponent;
