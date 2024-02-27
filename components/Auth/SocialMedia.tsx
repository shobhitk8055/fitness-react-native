import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const SocialMedia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mediaBox}>
        <Image source={require('../../assets/icons/google.png')}></Image>
      </View>
      <View style={styles.mediaBox}>
      <Image source={require('../../assets/icons/facebook.png')}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 30,
  },
  mediaBox: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'lightgrey',
    padding: 15
  }
});

export default SocialMedia;
