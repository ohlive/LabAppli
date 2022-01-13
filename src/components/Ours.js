// Components/FilmItem.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar,Image , TouchableOpacity, Text, TouchableHighlight, Alert} from 'react-native'


const Ours = ({navigation}) => {

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [imageToDisplay, setImageToDisplay] = useState(require("../assets/images/Ours_Yeux_Ouverts_transp.png"))

  return (
             <View style={styles.container}>
            <View>
            <TouchableOpacity onPress={() => {
        /* 1. Navigate to the Details route with params */
        navigation.navigate('Avatar', {
          imagePath: require("../assets/images/Ours_Yeux_Ouverts_transp.png"),
          jsonValue : ours
        });
      }}>
             <Image style={styles.image} source={require("../assets/images/Ours_Yeux_Ouverts_transp.png")} />
             </TouchableOpacity>
            </View>
           </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#D7D4DA',
   marginTop: StatusBar.currentHeight || 0,
  },
  image: {
    backgroundColor: '#E7DBCC',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  firstLine: {
    flex: 1,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },
  secondLine: {
    flex: 1,
    justifyContent: "space-evenly",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,

  },thirdLine: {
    flex: 1,

  },
});

export default Ours;
