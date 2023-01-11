import React, { useState } from "react";
import { Text, View, ScrollView, TextInput, StyleSheet } from "react-native";
import { Colors } from "../../constant/colors";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";

const PlaceForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.input}
          omnChangeText={changeTitleHandler}
          value={enteredTitle}
        />
      </View>
      <ImagePicker />
      <LocationPicker />
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    marginVertical: 8,
    paddingHorizontal: 4,
    paddingVertical: 8,
    fontSize: 16,
    borderBottomColor: Colors.primary700,
    borderBottomWidth: 2,
    backgroundColor: Colors.primary100,
  },
});