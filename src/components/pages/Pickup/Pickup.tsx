import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import pickupSelectedStyle from "./pickupSelectedStyle";
import Fontisto from '@expo/vector-icons/Fontisto';
import Ionicons from '@expo/vector-icons/Ionicons';



const Pickup = () => {
  const [pickupSelected, setPickupSelected] = useState<boolean>(false);
  return (
    <View style={pageComponentViewstyles.lineStyle}>
      <View
        style={pageComponentViewstyles.pageComponentView}
      >

        {/* {pickupSelected == false ? (
          <TouchableOpacity
            onPress={() => setPickupSelected(!pickupSelected)}>
            <Text style={pageComponentViewstyles.pageComponentText}>Pickup</Text>
          </TouchableOpacity>
        ) : ( */}
          <View>
            <TouchableOpacity
              onPress={() => setPickupSelected(!pickupSelected)}>
              <Text style={pageComponentViewstyles.selectedText}>Pickup</Text>
            </TouchableOpacity>

            <View style={pickupSelectedStyle.PickupContainer}>
              <Text style={pickupSelectedStyle.PickupText}>Select pickup date and time</Text>
            </View>
            <View style={pickupSelectedStyle.PickupLayout}>
              <TouchableOpacity style={[pickupSelectedStyle.PickupComponentBtn,
              pickupSelectedStyle.PickupShadowProp]}>
                <View style={{
                  marginLeft: 22, width: 140, flexWrap: "wrap"
                }}>
                  <Fontisto name="date" size={16} color={"#AEB0B0"} />

                  <Text style={pickupSelectedStyle.PickupButtonText}>Date</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity style={[pickupSelectedStyle.PickupComponentBtn,
              pickupSelectedStyle.PickupShadowProp]}>
                <View style={{
                  marginLeft: 22, width: 140, flexWrap: "wrap"
                }}>
                  <Ionicons name="time-outline" size={20} color="#AEB0B0" />

                  <Text style={pickupSelectedStyle.PickupButtonText}>Time</Text>

                </View>
              </TouchableOpacity>
            </View>


          </View>
        {/* )} */}
      </View>
    </View>
  );
};

export default Pickup;

const styles = StyleSheet.create({});
