import { View } from "react-native";
import { Camera } from "expo-camera";
import { useState } from "react";

const CameraComponent = () => {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera?.Constants?.Type?.back);
  const [camera, setCamera] = useState(null);

  return (
    <View style={{ flex: 1 }}>
      <Camera
        type={type}
        style={{ flex: 1, aspectRatio: 1 }}
        ratio={"1:1"}
        ref={(ref) => setCamera(ref)}
      />
    </View>
  );
};

export default CameraComponent;
