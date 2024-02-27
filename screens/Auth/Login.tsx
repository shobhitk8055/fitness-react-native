import React, { useState } from "react";
import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputBox from "../../components/Form/InputBox";
import useInput from "../../hooks/useInput";
import EmailIcon from "../../components/Icons/EmailIcon";
import PassIcon from "../../components/Icons/PassIcon";
import Button from "../../components/Elements/Button";
import Divider from "../../components/Auth/Divider";
import SocialMedia from "../../components/Auth/SocialMedia";

const Login = ({ navigation }) => {
  const { value: nameValue, onChangeText: onChangeName } = useInput();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <Text style={styles.topText}>Hey there,</Text>
        <Text style={styles.headingText}>Welcome Back</Text>
        <View style={styles.formContainer}>
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
          <Text style={styles.forget}>Forget your password?</Text>
        </View>
      </View>
      <View style={styles.container}>
        <Button text="Login" onPress={() => null} />
        <Divider />
        <SocialMedia />
        <Pressable
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: "RegisterMain" }],
            });
          }}
        >
          <Text style={styles.bottomText}>
            Don't have an account yet? <Text style={styles.loginLink}>Register</Text>
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
  forget: {
    color: "grey",
    textDecorationLine: "underline",
    textAlign: "center",
    paddingTop: 10,
    fontSize: 13,
  },
});
export default Login;
