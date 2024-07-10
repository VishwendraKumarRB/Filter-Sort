import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import pickupSelectedStyle from "../Pickup/pickupSelectedStyle";
// import validator from 'validator';


const Email = () => {
  const [emailSelected, setEmailSelected] = useState<boolean>(false);
  // const [email, setEmail] = useState('');
  // const [error, setError] = useState(null);
  // const validEmail = (input)=>{
  //   setEmail(input);
  //   if(!input){
  //     setError("Email is required");
  //     return;
  //   }
  //   if (validator.isEmail(input)) {
  //     setError('');
  //     } else {
  //     setError('Please enter a valid email address.');
  //     }
  // }

  return (
    <View style={pageComponentViewstyles.lineStyle}>
      <View style={pageComponentViewstyles.pageComponentView}>
        {/* {emailSelected == false ? (
          <TouchableOpacity onPress={() => setEmailSelected(!emailSelected)}>
            <Text style={pageComponentViewstyles.pageComponentText}>Email</Text>
          </TouchableOpacity>
        ) : ( */}
          <View>
            <TouchableOpacity onPress={() => setEmailSelected(!emailSelected)}>
            <Text style={pageComponentViewstyles.selectedText}>Email</Text>
          </TouchableOpacity>
            <View style={pickupSelectedStyle.PickupContainer}>
              <Text style={pickupSelectedStyle.PickupText}>Search registered email id</Text>
              <TextInput placeholder="Enter email id" style={pickupSelectedStyle.TextInput}
              //  value={email}
              //  onChangeText={validEmail} 
               />
            </View>
          </View>
        {/* )} */}
      </View>
    </View>
  );
};

export default Email;

const styles = StyleSheet.create({});
