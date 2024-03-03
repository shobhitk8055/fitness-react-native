import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputBox from "../../../components/Form/InputBox";
import useInput from "../../../hooks/useInput";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import EmailIcon from "../../../components/Icons/EmailIcon";
import PassIcon from "../../../components/Icons/PassIcon";
import Button from "../../../components/Elements/Button";
import Divider from "../../../components/Auth/Divider";
import SocialMedia from "../../../components/Auth/SocialMedia";
import CheckboxComp from "../../../components/Auth/CheckboxComp";

const RegisterMain = ({ navigation }) => {
  const { value: nameValue, onChangeText: onChangeName } = useInput();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.topText}>Hey there,</Text>
        <Text style={styles.headingText}>Create an Account</Text>
        <View style={styles.formContainer}>
          <InputBox
            placeholder="First name"
            value={nameValue}
            onChangeText={onChangeName}
            Icon={ProfileIcon}
          />
          <InputBox
            placeholder="Last name"
            value={nameValue}
            onChangeText={onChangeName}
            Icon={ProfileIcon}
          />
          <InputBox
            placeholder="Email"
            value={nameValue}
            onChangeText={onChangeName}
            Icon={EmailIcon}
          />
          <InputBox
            placeholder="Password"
            value={nameValue}
            onChangeText={onChangeName}
            Icon={PassIcon}
          />
          <CheckboxComp />
        </View>
      </View>
      <View style={styles.container}>
        <Button text="Register" onPress={() => {
          navigation.navigate("CompleteProfile");
        }} />
        <Divider />
        <SocialMedia />
        <Pressable onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: "Login" }],
          });
        }}>
          <Text style={styles.bottomText}>
            Already have an account? <Text style={styles.loginLink}>Login</Text>
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "space-between",
  },
  container: {
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  topText: {
    textAlign: "center",
    fontSize: 18,
  },
  headingText: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    paddingTop: 8,
  },
  formContainer: {
    paddingTop: 24,
  },
  bottomText: {
    fontSize: 15,
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "400",
  },
  loginLink: {
    color: "#C58BF2",
  },
});
export default RegisterMain;
