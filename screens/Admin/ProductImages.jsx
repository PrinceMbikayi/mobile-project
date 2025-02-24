import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import { colors, defaultStyle, formHeading } from "../../style/style";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard";
import { Avatar, Button } from "react-native-paper";

const ProductImages = ({ navigation, route }) => {
  const [images] = useState(route.params.images);
  const [productId] = useState(route.params.id);
  const [image, setImage] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);

  const loading = false;

  const deleteHandler = (id) => {
    console.log("Image Id", id);
    console.log("Product Id", productId);
  };

  const submitHandler = () => {};

  useEffect(() => {
    if (route.params?.image) {
      setImage(route.params.image);
      setImageChanged(true);
    }
  }, [route.params]);

  return (
    <View
      style={{
        ...defaultStyle,
        backgroundColor: colors.color5,
      }}
    >
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Images</Text>
      </View>

      <ScrollView
        style={{
          marginBottom: 20,
        }}
      >
        <View
          style={{
            backgroundColor: colors.color2,
            padding: 40,
            minHeight: 400,
          }}
        >
          {images?.length > 0 ? (
            images.map((i) => (
              <ImageCard
                key={i._id}
                src={i.url}
                id={i._id}
                deleteHandler={deleteHandler}
              />
            ))
          ) : (
            <Text style={{ textAlign: "center", color: "white" }}>
              Aucune image disponible
            </Text>
          )}
        </View>
      </ScrollView>

      <View
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: colors.color3,
        }}
      >
        <Image
          style={{
            backgroundColor: colors.color2,
            width: 100,
            height: 100,
            alignSelf: "center",
            resizeMode: "contain",
          }}
          source={{ uri: image }}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("camera", { updateProduct: true })
            }
          >
            <Avatar.Icon
              icon={"camera"}
              size={30}
              style={{
                backgroundColor: colors.color2,
                margin: 10,
              }}
              color={colors.color3}
            />
          </TouchableOpacity>
        </View>

        <Button
          style={{
            backgroundColor: colors.color1,
            padding: 6,
          }}
          textColor={colors.color2}
          loading={loading}
          onPress={submitHandler}
          disabled={!imageChanged}
        >
          Add
        </Button>
      </View>
    </View>
  );
};

export default ProductImages;
