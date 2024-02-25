import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import InputBox from "../../../components/Form/InputBox";
import useInput from "../../../hooks/useInput";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import EmailIcon from "../../../components/Icons/EmailIcon";
import PassIcon from "../../../components/Icons/PassIcon";
import CheckboxComp from "../../../components/Form/CheckboxComp";

const RegisterMain = () => {
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "white",
  },
  container: {
    display: "flex",
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
});
export default RegisterMain;
