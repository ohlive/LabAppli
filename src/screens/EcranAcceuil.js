// Components/Search.js


// import Avatar from './Avatar_function' // non fonctionnel

import React, { Component } from "react";
import { TouchableOpacity, View, StyleSheet, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function HomeScreen({ navigation }) {

  const avatar = require('../assets/images/ORPHEE_BrandmarkTagline-Reglisse.png')
  const iframeUrl = "https://www.youtube.com"
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems : "center",
      paddingHorizontal: 10,
        backgroundColor:'#87A9A3',
    },

      touchableOpacity: {
        // flex : 0.8,
        // justifyContent: "center",
        //
        // width: 100,
        // height: 100,
        // alignItems: "center",
        // marginTop: 9,
        // // marginLeft: 190

    },
    premsdecade: {
      flex: 5,

    },
    deuxieme: {
      flex: 80,

    },
    troisieme: {
      flex: 5,
    },

  });
  // console.log(navigation)
    return (
      <View style={styles.container}>
      <WebView
      scalesPageToFit={true}
    bounces={false}
    javaScriptEnabled
    style={{ height: 500, width: 300 }}
    source={iframeUrl}
    automaticallyAdjustContentInsets={false}  />
      

      </View>
    );
}

// class EcranAcceuil extends React.Component {
//   constructor(props) {
//       super(props);
//       this.state = {
//           avatar: require('../assets/images/ORPHEE_BrandmarkTagline-Reglisse.png'),
//       }
//     }
//
//     _avatarClicked= () =>{
//     console.log(this.props)
//       this.props.navigation.navigate("TestScreen")
//     }
//
//
//     render() {
// console.log(this.props)
//       return (
//         <View style={styles.container}>
//         <TouchableOpacity
//           style={styles.touchableOpacity}
//           onPress={this._avatarClicked}>
//             <Image style={styles.avatar} source={this.state.avatar}  />
//         </TouchableOpacity>
//         </View>
//       );
//     }
//   }
//
//   const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems : "center",
//     paddingHorizontal: 10,
//       backgroundColor:'#D7D4DA',
//   },
//
//     avatar: {
//     alignItems: "center",
//     backgroundColor: "#E7DBCC",
//     padding: 10,
//     marginTop : 10,
//   }
// });
//
//
//
// export default EcranAcceuil
// //export default Search
