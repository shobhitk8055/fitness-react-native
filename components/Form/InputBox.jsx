import React from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const InputBox = ({
  placeholder,
  value,
  onChangeText,
  Icon,
  error = false,
  secureTextEntry = false,
  keyboardType = undefined,
}) => {
  return (
    <KeyboardAvoidingView>
      <View style={styles.inputBox}>
        <TextInput
          secureTextEntry={secureTextEntry}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          keyboardType={keyboardType}
        />

        <View style={styles.icon}>
          <Icon />
        </View>
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  inputBox: {
    width: "100%",
    paddingTop: 20,
  },
  input: {
    height: 48,
    backgroundColor: "#F7F8F8",
    paddingHorizontal: 50,
    width: "100%",
    borderRadius: 10,
  },
  icon: {
    position: "absolute",
    top: 32,
    left: 15,
  },
  error: {
    color: "red",
    fontWeight: "300",
    paddingTop: 5,
  },
});

export default InputBox;
