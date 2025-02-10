import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { colors, defaultStyle } from "../style/style";
import Header from "../components/Header";
import { Avatar, Button } from "react-native-paper";
import { useState } from "react";
import SearchModel from "../components/SearchModel";
import ProductCard from "../components/ProductCard";
import { useNavigation } from "@react-navigation/native";
import Footer from "../components/Footer";
import Heading from "../components/Heading";

const categories = [
  {
    category: "Nike",
    _id: "cncwoncwo",
  },
  {
    category: "Adidas",
    _id: "wwpedw",
  },
  {
    category: "Puma",
    _id: "wcvj",
  },
  {
    category: "Lacoste",
    _id: "efplsc",
  },
  {
    category: "Milk",
    _id: "ldcdwwvw",
  },
  {
    category: "Riz",
    _id: "wrivbvvbcfbvbfvvif",
  },
  {
    category: "Haricot",
    _id: "ewckwvrjvvreuv",
  },
];

export const products = [
  {
    price: 1200,
    stock: 23,
    name: "Macbook M1 Pro",
    _id: "dswdcwwdvf",
    category: "LapTop",
    images: [{
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-space-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575247000",
    }],
  },

  {
    price: 1200,
    stock: 23,
    name: "Macbook M1 Pro",
    _id: "dswdcwaeafevwdvf",
    category: "IDK",
    images: [{
      url: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-mbp14-space-m1-2021?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1638575247000",
    }],
  },
];

const Home = () => {
  const [category, setCategory] = useState("");
  const [activeSearch, setActiveSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigation();

  const categoryHandler = (id) => {
    setCategory(id);
  };

  const addToCardHandler = (id) => {
    console.log("Add to cart", id);
  }

  return (
    <>
      {activeSearch && (
        <SearchModel
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setActiveSearch={setActiveSearch}
          products={products}
        />
      )}
      <View style={defaultStyle}>
        <Header />

        {/* Heading Row */}
        <View
          style={{
            paddingTop: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Heading */}
          <Heading text1="Our" text2="Products" />

          {/* Search Bar */}
          <View>
            <TouchableOpacity onPress={() => setActiveSearch((prev) => !prev)}>
              <Avatar.Icon
                icon={"magnify"}
                size={50}
                color="gray"
                style={{ backgroundColor: colors.color2, elevation: 12 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Categories */}
        <View
          style={{
            flexDirection: "row",
            height: 80,
          }}
        >
          <ScrollView
            horizontal
            contentContainerStyle={{
              alignItems: "center",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {categories.map((item, index) => {
              return (
                <Button
                  key={item._id}
                  style={{
                    backgroundColor:
                      category === item._id ? colors.color1 : colors.color5,
                    borderRadius: 100,
                    margin: 5,
                  }}
                  onPress={() => categoryHandler(item._id)}
                >
                  <Text
                    style={{
                      fontSize: 12,
                      color: category === item._id ? colors.color2 : "gray",
                    }}
                  >
                    {item.category}
                  </Text>
                </Button>
              );
            })}
          </ScrollView>
        </View>

        {/* Products */}
        <View style={{ flex: 1 }}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              products.map((item, index) => (
                <ProductCard 
                  stock={item.stock}
                  name={item.name}
                  price={item.price}
                  image={item.images[0]?.url}
                  addToCardHandler={addToCardHandler}
                  id={item._id}
                  key={item._id}
                  i={index}
                  navigate={navigate}
                />
              ))
            }
          </ScrollView>
        </View>
      </View>
      {/* Footer */}
      <Footer activeRoute={"home"} />
    </>
  );
};

export default Home;
