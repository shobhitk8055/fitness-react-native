import React from "react";
import { Text, StyleSheet, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectBox from "../../../components/Form/SelectBox";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import { genders } from "../../../constants/gender";
import DatePickBox from "../../../components/Form/DatePickBox";

const CompleteProfile = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/complete-profile.png")} />
      <View>
        <Text style={styles.headingText}>Let's complete your profile</Text>
        <Text style={styles.topText}>
          It will help us to know more about you!
        </Text>
        <View style={styles.form}>
          <SelectBox Icon={ProfileIcon} options={genders} label="Choose Gender" />
          <DatePickBox />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 10,
    backgroundColor: "white",
  },
  headingText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
  },
  topText: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
    paddingTop: 8,
    color: "grey",
  },
  form: {
    padding: 30
  }
});

export default CompleteProfile;
