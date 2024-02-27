import Checkbox from "expo-checkbox";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CheckboxComp() {
  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.section}>
      <Checkbox
        style={styles.checkbox}
        value={isChecked}
        onValueChange={setChecked}
      /> 
      <Pressable onPress={() => setChecked(!isChecked)}>
      <Text style={styles.paragraph}>By continuing you accept our Privacy Policy and Term of Use</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5
  },
  paragraph: {
    paddingTop: 8,
    paddingLeft: 5,
    fontSize: 11,
    width: '70%',
    color: '#ADA4A5'
  },
  checkbox: {
    margin: 8,
    color: '#eeeeee'
  },
});
