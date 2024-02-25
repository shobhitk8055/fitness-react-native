import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Button from "../../components/Elements/Button";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")} />
      <View style={styles.buttonContainer}>
        <Button text="Get Started" onPress={() => {
          navigation.navigate("OnboardingScreens");
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
  }
});

export default Welcome;
