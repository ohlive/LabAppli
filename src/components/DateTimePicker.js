
import React, { useState } from "react";
import { Button, View,StyleSheet, SafeAreaView, TouchableOpacity , Text} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";



const dateTimePicker = () => {

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [shouldShow, setShouldShow] = useState(true);
  const [dateToDisplay, setDateToDisplay] = useState("")

  const showDatePicker = () => {
    setDatePickerVisibility(true);
    setShouldShow(false)
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };


  const handleConfirm = (date) => {
    timeStringLocal = moment(date).format("HH:mm"); // "10:00"
   timeStringUTC = moment(date).utc().format("HH:mm"); // "07:00"
   console.log(timeStringLocal)
    hideDatePicker();
    setDateToDisplay(timeStringLocal)
  };

    return (

        <View>


        {shouldShow ?
          (
            <View>
            <TouchableOpacity style={styles.button}>
              <Text  onPress={ showDatePicker} > Choisir Votre heure</Text>
              </TouchableOpacity>
            </View>

           ) : <View>
           <TouchableOpacity style={styles.button}>
             <Text  onPress={ showDatePicker} > {dateToDisplay}</Text>
             </TouchableOpacity>
           </View>}



         <DateTimePickerModal
           isVisible={isDatePickerVisible}
           mode="time"
           onConfirm={handleConfirm}
           onCancel={hideDatePicker}
         />

      </View>

    );

}



const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
})


export default dateTimePicker;
