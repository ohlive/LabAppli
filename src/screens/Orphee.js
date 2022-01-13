import React, { Component } from "react";
import { useState, useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, ScrollView, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialButtonDark2 from "../components/MaterialButtonDark2";
import MaterialButtonDark from "../components/MaterialButtonDark";
import DateTimePicker from "../components/DateTimePicker";
import Avatar from "../screens/Avatar";

function Orphee({ navigation, route }) {

const [shouldShow, setShouldShow] = useState(true);
const [imageToDisplay, setImageToDisplay] = useState(require("../assets/images/owl_d_transp.png"))
console.log(navigation)
console.log(route)
// const setAvatarToDispay = () =>{
//   console.log(navigation)
//   setImageToDisplay(route.params.valueimage)
// }
// setImageToDisplay(route.params.valueimage)

  const showAlert = () =>{
  //console.log(props)
    Alert.alert(
          "Bien joué ! ",
          "Attendez quelques secondes pour voir les modifications sur votre Orphée. Bonne nuit =) !",
          [
            {
              text: "Annuler et modifier",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => navigation.navigate("EcranAcceuil") }
          ],
    );

}
    const dateTimePicker = () => {
      console.log('pass here')

    };


  return (
    <ScrollView style={styles.scrollView}>
    <View style={styles.container}>

      <Icon name="home" style={styles.icon}></Icon>
      <View style={styles.imageStack}>

        <ImageBackground
          source={require("../assets/images/ORPHEE_Motif-02.png")}

          style={styles.image}
          //imageStyle={styles.image_imageStyle}
        >
          <View style={styles.entete}>
          <Text style={styles.loremIpsum}>08:45</Text>
          <Text style={styles.mardi}>Lundi 27 Septembre 2021</Text>
          <Text style={styles.rose}>Rose</Text>
            </View>


            <View style={styles.touchableStyle}>
              <Avatar/>
            </View>

          <View style={styles.dateTime}>
          <View style={styles.touchableStyle}>
            <DateTimePicker/>
          </View>
            <Text style={styles.loremIpsum3}>
            Lundi :           7h00   20h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Mardi :           7h00   20h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Mercredi :    8h30   21h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Jeudi :          7h00   20h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Vendredi :    7h00   20h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Samedi :      8h30   21h00
            </Text>
            <Text style={styles.loremIpsum3}>
            Dimanche : 8h30   21h00
            </Text>
          </View>
          <View style={styles.materialButtonDark2Row}>
            <TouchableOpacity style={styles.materialButtonDark2}>
              <Text style={styles.caption}   onPress={() => navigation.navigate('Anniversaire')}>Anniversaire</Text>
              </TouchableOpacity>

          <TouchableOpacity style={styles.materialButtonDark2}>
            <Text style={styles.caption} onPress={ showAlert}>Synchroniser</Text>
          </TouchableOpacity>
          </View>
        </ImageBackground>

      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    fontSize: 40,
    marginLeft: 1384,
    marginTop: 411
  },
  entete:{
  flex : 4,
  },
  dateTime:{
  flex : 3,
  },
  timePicker:{
    flex : 1
  },
  image: {
    flex : 1,
    //position: "absolute",
  //  bottom: 0,
    backgroundColor: "rgba(64,64,64,1)"
  },
  touchableStyle:{
    flex : 1 ,
    justifyContent : 'center',
    alignItems: 'center'
  },
  image_imageStyle: {},
  loremIpsum: {
    //fontFamily: "andada-pro-regular",
    color: "rgba(135,169,163,1)",
    fontSize: 69,
    marginTop: 56,
    marginLeft: 190
  },
  mardi: {
    //fontFamily: "andada-pro-regular",
    color: "rgba(106,98,114,1)",
    fontSize: 24,
    marginLeft: 140
  },
  rose: {
  //  fontFamily: "andada-pro-regular",
    color: "rgba(144,110,68,1)",
    textAlign: "center",
    fontSize: 48,
  },
  image2: {
    width: 160,
    height: 160,
    alignItems: "center",
    marginTop: 9,
    marginLeft: 190
  },
  loremIpsum3: {
  //  fontFamily: "alegreya-sc-regular",
    color: "rgba(31,27,45,1)",
    fontSize: 24,
    textAlign: "center",
    marginTop: 10,
    // marginLeft: 100
    // marginRight:
  },
  materialButtonDark2: {
    height: 36,
    width: 153,
    marginRight : 10,
    backgroundColor: "#87A9A3",

  },
  materialButtonDark: {
    height: 36,
    width: 166,
    backgroundColor: "#87A9A3",

    marginLeft: 13
  },
  materialButtonDark2Row: {
    flex : 1,
    justifyContent : 'center',
  //  height: 36,
    flexDirection: "row",
    // borderWidth : 1,
    // marginTop: 55,
    marginLeft: 30,
    marginBottom: 21,
    // marginRight: 10,
    paddingRight: 10,
  },
  caption : {
    textAlign : "center",
    color: "#fff",
    fontSize: 14,
      marginTop: 7,
  },

  // loremIpsum2: {
  //   left: 0,
  //   // textAlign : 'right',
  // //  fontFamily: "alegreya-sc-regular",
  //   color: "rgba(31,27,45,1)",
  //   fontSize: 24,
  //   right: 288,
  //   textAlign: "right",
  //   top: 373
  // },
  // loremIpsum4: {
  //   left: 288,
  //   position: "absolute",
  // //  fontFamily: "alegreya-sc-regular",
  //   color: "rgba(31,27,45,1)",
  //   fontSize: 24,
  //   right: 0,
  //   textAlign: "left",
  //   top: 373
  // },
  imageStack: {
    height: 900,
    flex: 1,
    marginRight: -56,
    marginLeft: -1451
  }
});

export default Orphee;
