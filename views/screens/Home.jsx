import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import COLORS from "../../constants/colors";

const Home = () => {
  const {
    safeAreaView,
    header,
    location,
    locate,
    profile,
    scrollView,
    searchWrapper,
  } = styles;
  return (
    <SafeAreaView style={safeAreaView}>
      <StatusBar
        translucent={false}
        backgroundColor={COLORS.white}
        barStyle="dark-content"
      />
      <View style={header}>
        <View>
          <Text style={location}>Location</Text>
          <Text style={locate}>Canada</Text>
        </View>
        <Image source={require("../../assets/person.jpg")} style={profile} />
      </View>
      <View style={scrollView}>
        <View style={searchWrapper}>
          <View>
            <Ionicons name="search" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    backgroundColor: COLORS.white,
    flex: 1,
  },
  header: {
    marginTop: 20,
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    justifyContent: "space-between",
  },
  location: {
    color: COLORS.grey,
  },
  locate: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: "bold",
  },
  profile: {
    height: 50,
    width: 50,
    borderRadius: 100,
  },
  scrollView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    backgroundColor: "red",
  },
  searchWrapper: {
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Home;
