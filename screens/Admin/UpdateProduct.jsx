import { View, Text, ScrollView } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../style/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Button, TextInput } from "react-native-paper";
import { useState } from "react";

const UpdateProduct = ({ navigation, route }) => {
  const loading = false;

  const [id] = useState(route.params.id);

  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([]);
  const [visible, setVisible] = useState(false);

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
        <Text style={formHeading}>Update Product</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <ScrollView
          style={{
            padding: 20,
            elevation: 10,
            borderRadius: 10,
            backgroundColor: colors.color3,
          }}
        >
          <View
            style={{
              justifyContent: "center",
              height: 650,
            }}
          >
            <Button
              onPress={() =>
                navigation.navigate("productimages", { id, images: [] })
              }
              textColor={colors.color1}
            >
              Manage Images
            </Button>

            <TextInput
              {...inputOptions}
              placeholder="Name"
              value={name}
              onChangeText={setName}
            />

            <TextInput
              {...inputOptions}
              placeholder="Description"
              value={desc}
              onChangeText={setDesc}
            />

            <TextInput
              {...inputOptions}
              placeholder="Price"
              value={price}
              onChangeText={setPrice}
            />

            <TextInput
              {...inputOptions}
              placeholder="Stock"
              value={stock}
              onChangeText={setStock}
            />

            <Text
              style={{
                ...inputStyling,
                textAlign: "center",
                textAlignVertical: "center",
                borderRadius: 3,
              }}
              onPress={() => setVisible(true)}
            >
              {category}
            </Text>

            <Button>JJJ</Button>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default UpdateProduct;
