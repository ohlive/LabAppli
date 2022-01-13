import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground, Text, ScrollView, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

function Anniversaire({navigation}) {
  return (
    <View style={styles.container}>

      <Icon name="home" style={styles.icon}></Icon>
      <View style={styles.imageStack}>

        <ImageBackground
          source={require("../assets/images/ORPHEE_Motif-02.png")}
          // resizeMode="repeat"
          style={styles.image}
          // imageStyle={styles.image_imageStyle}
        >


          <View style={styles.dateTime}>
          <Text style={styles.mardi}>
          Rose :             12 Juillet
          </Text>
          <Text style={styles.mardi}>
          Maman :       28 Avril
          </Text>
          <Text style={styles.mardi}>
          Charlie :       15 Janvier
          </Text>
          <Text style={styles.mardi}>
          Papa :           10 Aout
          </Text>
          <TouchableOpacity style={styles.materialButtonDark2}>
            <Text style={styles.caption}   onPress={() => navigation.navigate('Orphee')}>Retour</Text>
          </TouchableOpacity>
          </View>

        </ImageBackground>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  icon: {
    color: "rgba(128,128,128,1)",
    // fontSize: 40,
    marginLeft: 1384,
    marginTop: 411
  },
  dateTime:{
  flex : 1,
  marginTop : 100
  },
  image: {
    flex : 1,
    //position: "absolute",
  //  bottom: 0,
    // backgroundColor: "rgba(64,64,64,1)"
  },

  mardi: {
    //fontFamily: "andada-pro-regular",
    color: "rgba(106,98,114,1)",
    fontSize: 24,
    marginLeft: 140,
    marginTop : 10
  },

  materialButtonDark2: {
    height: 36,
    width: 153,
    marginLeft : 180,
    marginTop : 30,
    justifyContent : 'center',
      alignItems: "center",
    backgroundColor: "#87A9A3",
    // borderWidth: 1,
    // borderColor: "#000000"
  },

  imageStack: {
    height: 5000,
    flex: 1,
    marginRight: -56,
    marginLeft: -1451
  }
});

export default Anniversaire;
