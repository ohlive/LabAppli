
// import React, { useState, useEffect } from "react";
import React, { Component } from "react";
import { Button, View,StyleSheet, SafeAreaView, TouchableOpacity , Text, Image} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import Avatar from "../screens/Avatar"

export class PicturePicker extends Component {

  constructor(props){
    super(props)
    this.state = {
      imageToDisplay : require("../assets/images/owl_d_transp.png")
    }
  }

   render() {
      return (
        <View>
        <TouchableOpacity
          style={styles.button}
          onPress={this.props.getData()}>
            <Image source={state.imageToDisplay}  />
          </TouchableOpacity>
        </View>

      );
   }
}

// export class Class2 extends Component {
//    state = {
//     data: null,
//    };
//
//    callApi = () => {
//       // Get API data
//       const data = {
//         hello: 'world',
//       };
//
//       this.setState({ data });
//    }
//
//    render {
//       return (
//          <PicturePicker getData={this.callApi} />
//       )
//    }
// }

//<div onClick={this.props.getData()}>Click to Call API</div>


// const picturePicker = () => {
//
//   // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
//   const [shouldShow, setShouldShow] = useState(true);
//   const [imageToDisplay, setImageToDisplay] = useState(require("../assets/images/owl_d_transp.png"))
//
//   const showImagePicker = () => {
//
//     <Avatar />
//
//
//   };
//
//   const avatarPicker = (image) => {
//   setShouldShow(true)
//   setImageToDisplay(image)
//
//   };
//
//
//     return (
//
// <View>
//             {shouldShow ?
//
//                 <View>
//                 <TouchableOpacity
//                   style={styles.button}
//                   onPress={showImagePicker}>
//                     <Image source={imageToDisplay}  />
//                   </TouchableOpacity>
//                 </View>
//
//                :
//                <View style={styles.container}>
//               <View>
//               <TouchableOpacity onPress={avatarPicker(require("../assets/images/Ours_Yeux_Ouverts_transp.png"))}>
//                <Image style={styles.image} source={ require("../assets/images/Ours_Yeux_Ouverts_transp.png")} />
//                </TouchableOpacity>
//               </View>
//               <View>
//                <TouchableOpacity onPress={avatarPicker(require("../assets/images/Renard_Yeux_Ouverts_122x250.png"))}>
//                <Image style={styles.image} source={require("../assets/images/Renard_Yeux_Ouverts_122x250.png")} />
//                </TouchableOpacity>
//               </View>
//              </View>
//              }
//              </View>
//     );
//
// }
//
//
//
// const styles = StyleSheet.create({
//   button: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems:"center"
//   },
// })
//
//
// export default picturePicker;
