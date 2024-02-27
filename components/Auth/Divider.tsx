import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Divider = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>Or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 20
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: 'lightgrey',
  },
  text: {
    marginHorizontal: 10,
    color: 'black',
    fontWeight: '300'
  },
});

export default Divider;
