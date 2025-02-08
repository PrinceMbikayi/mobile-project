import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { colors, defaultStyle } from "../style/style";
import Header from "../components/Header";
import Carousel from "react-native-snap-carousel";
import { Avatar, Button } from "react-native-paper";
import Toast from "react-native-toast-message";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH;
export const iconOptions = {
  size: 20,
  style: {
    borderRadius: 5,
    backgroundColor: colors.color5,
    height: 25,
    width: 25,
  },
};

const ProductDetails = ({ route: { params } }) => {
  console.log(params.id);

  const name = "Macbook M1 Pro";
  const price = "1200";
  const stock = 5;
  const description =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
  const isCarousel = useRef(null);

  const [quantity, setQuantity] = useState(1);

  const images = [
    {
      id: "Ascdjjd",
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-space-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575247000",
    },
    {
      id: "Ascdjjdfvenverv",
      url: "https://cdn.pixabay.com/photo/2021/11/05/11/08/laptop-6771039_1280.jpg",
    },
  ];

  const incrementQty = () => {
    if (stock <= quantity) return;
    setQuantity((prev) => prev + 1);
  };

  const decrementQty = () => {
    if (quantity <= 1) return;
    setQuantity((prev) => prev - 1);
  };

  const addToCardHandler = () => {
    if(stock === 0) return Toast.show({
        type: "error",
        text1: "Out Of Stock",
    });
    Toast.show({
        type: "success",
        text1: "Added To Cart",
    })
  }

  return (
    <View
      style={{ ...defaultStyle, padding: 0, backgroundColor: colors.color1 }}
    >
      <Header back={true} />

      {/* Carousel */}
      <Carousel
        layout="stack"
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        ref={isCarousel}
        data={images}
        renderItem={CarouselCardItem}
      />
      <View
        style={{
          backgroundColor: colors.color2,
          padding: 35,
          flex: 1,
          marginTop: -380,
          borderTopLeftRadius: 55,
          borderTopRightRadius: 55,
        }}
      >
        <Text numberOfLines={2} style={{ fontSize: 25 }}>
          {name}
        </Text>

        <Text style={{ fontSize: 18, fontWeight: "900" }}>${price}</Text>

        <Text
          style={{
            letterSpacing: 1,
            lineHeight: 20,
            marginVertical: 15,
          }}
          numberOfLines={8}
        >
          {description}
        </Text>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 5,
          }}
        >
          <Text
            style={{
              color: colors.color3,
              fontWeight: "100",
            }}
          >
            Quantity
          </Text>
          <View
            style={{
              width: 80,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={decrementQty}>
              <Avatar.Icon icon={"minus"} {...iconOptions} />
            </TouchableOpacity>

            <Text style={style.quantity}>{quantity}</Text>

            <TouchableOpacity onPress={incrementQty}>
              <Avatar.Icon icon={"plus"} {...iconOptions} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity activeOpacity={0.8} onPress={addToCardHandler}>
            <Button icon={"cart"} style={style.btn} textColor={colors.color2}>Add to Cart</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const CarouselCardItem = ({ item, index }) => {
  return (
    <View style={style.container} key={index}>
      <Image source={{ uri: item.url }} style={style.image} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: colors.color1,
    width: ITEM_WIDTH,
    paddingVertical: 40,
    height: 380,
  },
  image: {
    width: ITEM_WIDTH,
    height: 250,
    resizeMode: "contain",
  },
  quantity: {
    backgroundColor: colors.color4,
    height: 25,
    width: 25,
    textAlignVertical: "center",
    textAlign: "center",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: colors.color5,
  },
  btn: {
    backgroundColor: colors.color3,
    borderRadius: 100,
    padding: 5,
    marginVertical: 35,
  }
});

export default ProductDetails;
