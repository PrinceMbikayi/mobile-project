import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle } from "../style/style";
import Header from "../components/Header";
import Heading from "../components/Heading";
import { Button } from "react-native-paper";
import CartItem from "../components/CartItem";
import { useNavigation } from "@react-navigation/native";

export const cartItems = [
  {
    name: "Macbook M1 Pro",
    image:
      "https://www.mymac.dz/wp-content/uploads/2021/12/macbook-pro-16-argent-512-go.jpg",
    product: "asdsjkbkvbev",
    stock: 5,
    price: 1200,
    quantity: 2,
  },
  {
    name: "Macbook M1 Pro",
    image:
      "https://www.mymac.dz/wp-content/uploads/2021/12/macbook-pro-16-argent-512-go.jpg",
    product: "asdsjfevgvrkbkvbev",
    stock: 5,
    price: 1200,
    quantity: 2,
  },
  {
    name: "Macbook M1 Pro",
    image:
      "https://www.mymac.dz/wp-content/uploads/2021/12/macbook-pro-16-argent-512-go.jpg",
    product: "lmnoorovevefve",
    stock: 5,
    price: 1200,
    quantity: 2,
  },
  {
    name: "Macbook M1 Pro",
    image:
      "https://www.mymac.dz/wp-content/uploads/2021/12/macbook-pro-16-argent-512-go.jpg",
    product: "asdsjkbkjcppgtbtvbev",
    stock: 5,
    price: 1200,
    quantity: 2,
  },
  {
    name: "Lenovo ThinkPad",
    image: "https://m.media-amazon.com/images/I/61IRRQ2gWPL.jpg",
    product: "asdsjkbkvbewfrferv",
    stock: 5,
    price: 1200,
    quantity: 5,
  },
];

const Cart = () => {
  const navigate = useNavigation();

  const incrementHandler = (id, qty, stock) => {
    console.log("Increment", id, qty, stock);
  };

  const decrementHandler = (id, qty) => {
    console.log("decresing", id, qty);
  };

  return (
    <View
      style={{
        ...defaultStyle,
        padding: 0,
      }}
    >
      {/* Header */}
      <Header back={true} emptyCart={true} />

      {/* Heading */}
      <Heading
        text1="Shopping"
        text2="Cart"
        containerStyle={{ paddingTop: 70, marginLeft: 35 }}
      />

      <View
        style={{
          paddingVertical: 20,
          flex: 1,
        }}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {cartItems.map((i, index) => (
            <CartItem
              navigate={navigate}
              key={i.product}
              id={i.product}
              name={i.name}
              stock={i.stock}
              amount={i.price}
              imgSrc={i.image}
              index={index}
              qty={i.quantity}
              incrementHandler={incrementHandler}
              decrementHandler={decrementHandler}
            />
          ))}
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 35,
        }}
      >
        <Text>5 Items</Text>
        <Text>$5</Text>
      </View>

      <TouchableOpacity
        onPress={
          cartItems.length > 0 ? () => navigate.navigate("confirmorder") : null
        }
      >
        <Button
          style={{
            backgroundColor: colors.color3,
            borderRadius: 100,
            padding: 5,
            margin: 30,
          }}
          icon={"cart"}
          textColor={colors.color2}
        >
          Checkout
        </Button>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
