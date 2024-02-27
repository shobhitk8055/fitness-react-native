import React, { useRef, useState } from "react";
import { StyleSheet, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const SelectBox = ({ label, Icon, options = [] }) => {
  const [favSport0, setFavSport0] = useState(undefined);
  const inputRefs = useRef({
    favSport0: null,
  });

  const placeholder = {
    label: label,
    value: null,
    color: "#9EA0A4",
  };

  return (
    <View style={styles.container}>
      <RNPickerSelect
        placeholder={placeholder}
        items={options}
        onValueChange={(value) => setFavSport0(value)}
        style={pickerSelectStyles}
        value={favSport0}
        ref={(el) => {
          inputRefs.current.favSport0 = el;
        }}
      />
      <View style={styles.icon}>
        <Icon />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F8",
    borderRadius: 10,
  },
  icon: {
    position: 'absolute',
    top: 15,
    left: 15
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 18,
    paddingHorizontal: 10,

    color: "#000000",
    borderRadius: 10,
    paddingLeft: 50, // to ensure the text is never behind the icon
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "#F7F8F8",
    paddingRight: 30, // to ensure the text is never behind the icon
  },
});

export default SelectBox;
