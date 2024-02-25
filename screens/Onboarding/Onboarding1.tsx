import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const Onboarding1 = ({ onPress }: { onPress: () => void}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/onboarding1.png")}
      />
      <View style={styles.textContainer}>
        <Text style={styles.headingContainer}>Track Your Goal</Text>
        <Text style={styles.descText}>
          Don't worry if you have trouble determining your goals, We can help
          you determine your goals and track your goals
        </Text>
      </View>
      <Pressable
        onPress={onPress}
        style={styles.circleBtn}
      >
        <Image source={require("../../assets/Button.png")} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: "50%",
  },
  textContainer: {
    paddingHorizontal: 30,
    marginTop: 65,
  },
  headingContainer: {
    fontSize: 27,
    fontWeight: "bold",
  },
  descText: {
    fontSize: 16,
    marginTop: 20,
    fontWeight: "300",
    lineHeight: 23,
    color: "#7B6F72",
  },
  circleBtn: {
    position: "absolute",
    bottom: 50,
    right: 40,
  },
});

export default Onboarding1;
