import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import ProfileIcon from "../../components/Icons/ProfileIcon";
import moment from "moment";

const DatePickBox = ({ value, onChangeText, Icon, error = false }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(value ? value : new Date());

  const handlePickDate = () => {
    onChangeText(date);
    setModalVisible(!modalVisible);
  };
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <RNDateTimePicker
                value={date}
                display="inline"
                onChange={(e, dateP) => {
                  setDate(dateP);
                }}
              />
              <View style={styles.modalButtons}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Cancel</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={handlePickDate}
                >
                  <Text style={styles.textStyle}>Choose</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <Pressable onPress={() => setModalVisible(true)}>
        <View style={styles.inputBox}>
          <View style={styles.input}>
            <Text style={styles.placeholder}>
              {value ? moment(date).format("LL") : "Date of birth"}
            </Text>
          </View>
          <View style={styles.icon}>
            <Icon />
          </View>
          {error && <Text style={styles.error}>{error}</Text>}
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 0,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    alignSelf: "flex-end",
  },
  textStyle: {
    color: "white",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalButtons: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    gap: 5,
  },
  inputBox: {
    width: "100%",
    paddingTop: 20,
  },
  input: {
    height: 58,
    backgroundColor: "#F7F8F8",
    paddingHorizontal: 50,
    width: "100%",
    borderRadius: 10,
    justifyContent: "center",
  },
  icon: {
    position: "absolute",
    top: 36,
    left: 15,
  },
  error: {
    color: "red",
    fontWeight: "300",
    paddingTop: 5,
  },
  placeholder: {
    color: "grey",
    justifyContent: "center",
  },
});

export default DatePickBox;
