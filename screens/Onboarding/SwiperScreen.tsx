import React, { useRef } from "react";
import { ScrollView } from "react-native";
import Onboarding1 from "./Onboarding1";
import Onboarding2 from "./Onboarding2";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import Onboarding3 from "./Onboarding3";
import Onboarding4 from "./Onboarding4";

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
const SwiperScreen = ({ navigation }) => {
  const swiperRef = useRef<Swiper>(null);

  return (
    <Swiper
      ref={swiperRef}
      style={styles.wrapper}
      showsButtons={false}
      showsPagination={true}
      loop={false}
    >
      <Onboarding1 onPress={() => swiperRef?.current?.scrollBy(1)} />
      <Onboarding2 onPress={() => swiperRef?.current?.scrollBy(1)} />
      <Onboarding3 onPress={() => swiperRef?.current?.scrollBy(1)} />
      <Onboarding4
        onPress={() => {
          navigation.navigate("RegisterMain");
        }}
      />
    </Swiper>
  );
};

export default SwiperScreen;
