import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Button,
  Pressable,
} from "react-native";
import React, { useState } from "react";

import COLORS from "../../constants/colors";

const Onboard = ({ navigation }) => {
  const {
    image,
    indicatorContainer,
    indicator,
    info,
    title,
    subTitle,
    infoChild,
    btn,
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
            onTouchEnd={() => setActiveIndex(index)}
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
        <Pressable onPress={() => navigation.navigate("home")}>
          <View style={btn}>
            <Text style={btnText}>Get Started</Text>
          </View>
        </Pressable>
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
    height: 20,
    width: 30,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
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
  btn: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.dark,
    borderRadius: 15,
    marginBottom: 40,
  },
  btnText: {
    color: COLORS.white,
  },
});

export default Onboard;
