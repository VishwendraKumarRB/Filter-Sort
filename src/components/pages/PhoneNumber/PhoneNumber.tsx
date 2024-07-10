import { ImageBackground, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import pickupSelectedStyle from "../Pickup/pickupSelectedStyle";
// import {CallingCodePicker} from '@digieggs/rn-country-code-picker'
import CountryCodeDropdownPicker from 'react-native-dropdown-country-picker'


const PhoneNumber = () => {
  const [phoneNumberSelected, setPhoneNumberSelected] =
    useState<boolean>(false);
    const [selected, setSelected] = React.useState<any>('+91');
  const [phone, setPhone] = React.useState<any>('');

  return (
    <View style={pageComponentViewstyles.lineStyle}>
      <View
        style={pageComponentViewstyles.pageComponentView}
      >
        {/* {phoneNumberSelected == false ? (
          <TouchableOpacity
            onPress={() => setPhoneNumberSelected(!phoneNumberSelected)}>
            <Text style={pageComponentViewstyles.pageComponentText}>
              Phone Number
            </Text>
          </TouchableOpacity>

        ) : ( */}
          <View>
            <TouchableOpacity
              onPress={() => setPhoneNumberSelected(!phoneNumberSelected)}>
              <Text style={pageComponentViewstyles.selectedText}>
                Phone Number
              </Text>
            </TouchableOpacity>

            <View style={pickupSelectedStyle.PickupContainer}>
              <Text style={pickupSelectedStyle.PickupText}>Search registered phone number</Text>
              <ScrollView>
              {/* <CallingCodePicker onValueChange={() => {}} /> */}
              <CountryCodeDropdownPicker 
        selected={selected} 
         setSelected={setSelected}
        // setCountryDetails={setCountry} 
        phone={phone} 
        setPhone={setPhone} 
        countryCodeTextStyles={{fontSize: 13}}
      />
              </ScrollView>

            </View>
          </View>
        {/* )} */}
      </View>
    </View>
  );
};

export default PhoneNumber;

const styles = StyleSheet.create({});
