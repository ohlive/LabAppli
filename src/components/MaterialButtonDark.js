import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Alert } from "react-native";

const showAlert = () =>
//console.log(props)
  Alert.alert(
        "Bien joué",
        "Attendez quelques secondes pour voir les modifications",
        [
          {
            text: "Annuler et modifier",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel"
          },
          { text: "OK", onPress: () => navigation.navigate("EcranAcceuil") }
        ],
  );

function MaterialButtonDark(props) {
  console.log(props.navigation.navigate)
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <Text style={styles.synchroniser} onPress = {showAlert}>Synchroniser</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16
  },
  synchroniser: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonDark;
