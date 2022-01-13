// Components/FilmItem.js

import React, { Component } from "react";
import { useState, useEffect } from "react";
import { SafeAreaView, View, FlatList, StyleSheet, StatusBar,Image , TouchableOpacity, Text, TouchableHighlight, Alert} from 'react-native'
import Ours from "../components/Ours";
import Renard from "../components/Renard";

const AvatarChoice = ({route, navigation }) => {

  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [imageToDisplay, setImageToDisplay] = useState(require("../assets/images/owl_d_transp.png"))
  const { imagePath, jsonValue } = route.params;

  console.log("navigation = " + navigation)
  console.log(route)


  const avatarPicker = (image) => {
    console.log('pass here avatar')
    console.log(image)
  setImageToDisplay(image)
  };


    return (
               <View style={styles.container}>
                 <View>
                  <Ours/>
              </View>
              <View>
               <Renard/>
              </View>
             </View>
    );

}


// class avatarChoice extends React.Component {
//
//   constructor(props){
//     super(props)
//     this.state = {
//       somethnin : ''
//     }
//   }
//
//   _avatarClicked= (image) =>{
//
//   }
//
//   // onPress(avatarToDisplay) {
//   //   //  this.props.navigation.navigate('PageAcceuil', {avatarToDisplay: avatarToDisplay})
//   //     navigation.navigate('Orphee')
//   //   };
//
// render(){
//   return (
//        <View style={styles.container}>
//       <View>
//       <TouchableOpacity onPress={this._avatarClicked(require("../assets/images/Ours_Yeux_Ouverts_transp.png"))}>
//        <Image style={styles.image} source={ require("../assets/images/Ours_Yeux_Ouverts_transp.png")} />
//        </TouchableOpacity>
//       </View>
//       <View>
//        <TouchableOpacity onPress={avatarPicker(require("../assets/images/Renard_Yeux_Ouverts_122x250.png"))}>
//        <Image style={styles.image} source={require("../assets/images/Renard_Yeux_Ouverts_122x250.png")} />
//        </TouchableOpacity>
//       </View>
//      </View>
//    );
// }
// }

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

export default AvatarChoice;
