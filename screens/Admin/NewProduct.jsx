import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  colors,
  defaultStyle,
  formHeading,
  inputOptions,
  inputStyling,
} from "../../style/style";
import Header from "../../components/Header";
import Loader from "../../components/Loader";
import { Avatar, Button, TextInput } from "react-native-paper";
import { useState } from "react";
import SelectComponent from "../../components/SelectComponent";

const NewProduct = ({ navigation }) => {
  const loading = false;

  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [category, setCategory] = useState("Laptop");
  const [categoryID, setCategoryID] = useState("");
  const [categories, setCategories] = useState([
    { _id: "sdcscefvfe", category: "Laptop" },
    { _id: "dcsdcs", category: "Camera" },
    { _id: "wfwfw", category: "Phone" },
  ]);
  const [visible, setVisible] = useState(false);

  const submitHandler = () => {
    console.log(name, desc, price, stock, categoryID);
  };

  return (
    <>
      <View
        style={{
          ...defaultStyle,
          backgroundColor: colors.color5,
        }}
      >
        <Header back={true} />
        {/* Heading */}
        <View style={{ marginBottom: 20, paddingTop: 70 }}>
          <Text style={formHeading}>New Product</Text>
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
              <View
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                  marginBottom: 20,
                }}
              >
                <Avatar.Image
                  size={80}
                  style={{
                    backgroundColor: colors.color1,
                  }}
                  source={{ uri: image ? image : null }}
                />
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("camera", { NewProduct: true })
                  }
                >
                    <Avatar.Icon icon={"camera"} size={30} color={colors.color3} style={{
                        backgroundColor: colors.color2,
                        position: "absolute",
                        bottom: 0,
                        right: -5,
                    }} />
                </TouchableOpacity>
              </View>

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
                keyboardType="number-pad"
                value={price}
                onChangeText={setPrice}
              />

              <TextInput
                {...inputOptions}
                placeholder="Stock"
                keyboardType="number-pad"
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

              <Button
                textColor={colors.color2}
                style={{
                  backgroundColor: colors.color1,
                  margin: 10,
                  padding: 6,
                }}
                onPress={submitHandler}
                loading={loading}
                disabled={loading}
              >
                Create
              </Button>
            </View>
          </ScrollView>
        )}
      </View>

      <SelectComponent
        categories={categories}
        setCategoryID={setCategoryID}
        setCategory={setCategory}
        visible={visible}
        setVisible={setVisible}
      />
    </>
  );
};

export default NewProduct;
