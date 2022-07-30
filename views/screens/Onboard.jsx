import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import COLORS from "../../constants/colors";

const Onboard = ({ navigation }) => {
  const {
    image,
    indicatorContainer,
    indicator,
    indicatorActive,
    info,
    title,
    subTitle,
    infoChild,
    btnContainer,
    btnText,
  } = styles;
  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar translucent backgroundColor={COLORS.transparent} />
      <Image source={require("../../assets/onboardImage.jpg")} style={image} />
      <View style={indicatorContainer}>
        {[...Array(3)].map((_, index) => (
          <View
            style={[indicator, index === activeIndex && indicatorActive]}
            key={index}
            onTouchStart={() => setActiveIndex(index)}
          />
        ))}
      </View>
      <View style={info}>
        <View style={infoChild}>
          <Text style={title}>Find Your</Text>
          <Text style={title}>Sweet Home</Text>
        </View>
        <View style={infoChild}>
          <Text style={subTitle}>Schedule visits in just a few clicks</Text>
          <Text style={subTitle}>visit in just a few clicks</Text>
        </View>
        <View style={btnContainer}>
          <Pressable onPress={() => navigation.navigate("home")}>
            <View>
              <Text style={btnText}>Get Started</Text>
            </View>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 420,
    width: "100%",
    borderBottomLeftRadius: 100,
  },
  indicatorContainer: {
    height: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  indicator: {
    height: 5,
    width: 40,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
    marginTop: 20,
    borderRadius: 5,
  },
  indicatorActive: {
    backgroundColor: COLORS.dark,
  },
  info: {
    paddingHorizontal: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    color: COLORS.grey,
  },
  infoChild: {
    marginTop: 10,
  },
  btnContainer: {
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    marginTop: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: COLORS.white,
  },
});

export default Onboard;
