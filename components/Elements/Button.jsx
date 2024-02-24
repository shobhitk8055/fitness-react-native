import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ text, onPress }) => {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#92A3FD",
    paddingVertical: 25,
    borderRadius: 30,
  },
  buttonText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});

export default Button;
