import React, { useState } from "react";
import { Text, StyleSheet, Image, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SelectBox from "../../../components/Form/SelectBox";
import ProfileIcon from "../../../components/Icons/ProfileIcon";
import { genders } from "../../../constants/gender";
import DatePickBox from "../../../components/Form/DatePickBox";
import CalendarIcon from "../../../components/Icons/CalendarIcon";
import moment from "moment";
import InputBox from "../../../components/Form/InputBox";
import useInput from "../../../hooks/useInput";
import ScaleIcon from "../../../components/Icons/ScaleIcon";
import UpDownIcon from "../../../components/Icons/UpDownIcon";
import Button from "../../../components/Elements/Button";

const CompleteProfile = () => {
  const [date, setDate] = useState();
  const { value: weightValue, onChangeText: onChangeWeight } = useInput();
  const { value: heightValue, onChangeText: onChangeHeight } = useInput();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../../../assets/complete-profile.png")} />
      <ScrollView>
        <Text style={styles.headingText}>Let's complete your profile</Text>
        <Text style={styles.topText}>
          It will help us to know more about you!
        </Text>
        <View style={styles.form}>
          <SelectBox
            Icon={ProfileIcon}
            options={genders}
            label="Choose Gender"
          />
          <InputBox
            placeholder="Weight"
            value={weightValue}
            onChangeText={onChangeWeight}
            Icon={ScaleIcon}
            keyboardType="numeric"
          />
          <InputBox
            placeholder="Height"
            value={heightValue}
            onChangeText={onChangeHeight}
            Icon={UpDownIcon}
            keyboardType="numeric"
          />
          <DatePickBox
            Icon={CalendarIcon}
            error
            value={date}
            onChangeText={setDate}
          />
          <View style={styles.nextButton}>
            <Button text="Next" onPress={() => null} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
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
    padding: 30,
  },
  nextButton: {
    paddingTop: 20
  }
});

export default CompleteProfile;
