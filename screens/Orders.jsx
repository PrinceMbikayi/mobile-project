import { View, Text, ScrollView } from "react-native";
import React from "react";
import { colors, defaultStyle, formHeading } from "../style/style";
import Header from "../components/Header";
import Loader from "../components/Loader";
import { Headline } from "react-native-paper";
import OrderItems from "../components/OrderItems";

export const orders = [
  {
    _id: "sjncncecw",
    shippingInfo: {
      address: "23 Nairobi",
      city: "Nairobi",
      country: "kenya",
      pinCode: 28737,
    },
    createdAt: "12-01-2025T2343",
    orderStatus: "Proccessing",
    paymentMethod: "COD",
    totalAmount: 2000,
  },

  {
    _id: "sjncncecwseewef",
    shippingInfo: {
      address: "57 Gombe",
      city: "Kinshasa",
      country: "DR Congo",
      pinCode: 16094,
    },
    createdAt: "08-02-2025T2343",
    orderStatus: "Proccessing",
    paymentMethod: "ONLINE",
    totalAmount: 1000,
  },

  {
    _id: "bnvkjveverv",
    shippingInfo: {
      address: "57 Gombe",
      city: "Kinshasa",
      country: "DR Congo",
      pinCode: 16094,
    },
    createdAt: "08-02-2025T2343",
    orderStatus: "Proccessing",
    paymentMethod: "ONLINE",
    totalAmount: 1000,
  },

  {
    _id: "fvfdvfverjver",
    shippingInfo: {
      address: "57 Gombe",
      city: "Kinshasa",
      country: "DR Congo",
      pinCode: 16094,
    },
    createdAt: "08-02-2025T2343",
    orderStatus: "Proccessing",
    paymentMethod: "ONLINE",
    totalAmount: 1000,
  },
];

const Orders = () => {
  const loading = false;

  return (
    <View style={{ ...defaultStyle, backgroundColor: colors.color5 }}>
      <Header back={true} />

      {/* Heading */}
      <View style={{ marginBottom: 20, paddingTop: 70 }}>
        <Text style={formHeading}>Orders</Text>
      </View>

      {loading ? (
        <Loader />
      ) : (
        <View
          style={{
            flex: 1,
            padding: 10,
          }}
        >
          <ScrollView showsVerticalScrollIndicator={false}>
            {orders.length > 0 ? (
              orders.map((item, index) => (
                <OrderItems
                  key={item._id}
                  id={item._id}
                  i={index}
                  price={item.totalAmount}
                  status={item.orderStatus}
                  paymentMethod={item.paymentMethod}
                  orderedOn={item.createdAt.split("T")[0]}
                  address={`${item.shippingInfo.address}, ${item.shippingInfo.city}, ${item.shippingInfo.country} ${item.shippingInfo.pinCode}`}
                />
              ))
            ) : (
              <Headline style={{ textAlign: "center" }}>No Orders Yet</Headline>
            )}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default Orders;
