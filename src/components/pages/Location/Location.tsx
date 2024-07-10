import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import pickupSelectedStyle from "../Pickup/pickupSelectedStyle";
import SortSelectedStyle from "../Sort/SortSelectedStyle";
import Fontisto from '@expo/vector-icons/Fontisto';
import City from "./City";

const Location = () => {
 
  const states: any = [
    {
      id: 1,
      state_name: "State 1",
      city: [
        {
          id: 101,
          city_name: "City 1",
          location: [
            {
              id: 1001,
              location_name: "Location 1"
            },
            {
              id: 1002,
              location_name: "Location 2"
            }
          ]
        },
        {
          id: 102,
          city_name: "City 2",
          location: [
            {
              id: 1003,
              location_name: "Location 1"
            }
          ]
        }
      ]
    },
    {
      id: "2",
      state_name: "State 2",
      city: [
        {
          id: 101,
          city_name: "City 21",
          location: [
            {
              id: 1001,
              location_name: "Location 1"
            },
            {
              id: 1002,
              location_name: "Location 2"
            }
          ]
        },
        {
          id: 102,
          city_name: "City 22",
          location: [
            {
              id: 1003,
              location_name: "Location 1"
            }
          ]
        }
      ]
    },

  ];
  // const [locationSelected, setLocationSelected] = useState<boolean>(false);
  const [locationView, setLocationView] = useState<string | number>(0);
  // const [dropDown, setDropDown] = useState<boolean>(false)
// console.warn(states[0].id)
  return (

    <View style={pageComponentViewstyles.lineStyle}>
      <View
        style={pageComponentViewstyles.pageComponentView}
      >
        {/* {locationSelected == false ? (
          <TouchableOpacity onPress={() => setLocationSelected(!locationSelected)}
          >
            <Text style={pageComponentViewstyles.pageComponentText}>
              Location
            </Text>
          </TouchableOpacity>

        ) : ( */}
          <View>
            {/* <TouchableOpacity onPress={() => setLocationSelected(!locationSelected)}
            >
              <Text style={pageComponentViewstyles.selectedText}>
                Location
              </Text>
            </TouchableOpacity> */}
             <Text style={pageComponentViewstyles.selectedText}>
                Location
              </Text>
            <View style={pickupSelectedStyle.PickupContainer}>
              <Text style={pickupSelectedStyle.PickupText}>Search Location</Text>
              {/* <View style={{ flex: 1, flexDirection: "row",backgroundColor:"blue" }}> */}
                {/* <View style={{ flex: 9 }}> */}
                  <TextInput placeholder="Search State, City or Location"
                    style={pickupSelectedStyle.TextInput} 
                    // onFocus={()=>setDropDown(!dropDown)}
                     />

                  
                {/* </View> */}
                {/* <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}
                  onPress={() => setDropDown(!dropDown)}>
                  {
                    dropDown == true ? <Fontisto name="angle-up" size={15} color="black" /> :
                      <Fontisto name="angle-down" size={15} color="black" />
                  }

                </TouchableOpacity> */}

              {/* </View> */}
              {/* {dropDown == true ? */}
                <View style={pickupSelectedStyle.bikeModelView}>
                  {
                    states.map((state: any, index: number) => {
                      // console.warn(state)
                      let cities = [];
                      if (state.id === locationView) { cities = state.city; }
                      return (
                        <View style={SortSelectedStyle.textLayout} key={index}>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => setLocationView(state.id)}>
                              {locationView === state.id ? <Fontisto name="checkbox-active"
                                size={19} color={"#44B1D5"} /> :
                                <Fontisto name="checkbox-passive" size={21} color={"#C4C4C4"} />
                              }
                            </TouchableOpacity>

                            <View style={{ marginLeft: 9 }}>
                              <Text style={locationView === state.id ?
                                SortSelectedStyle.CheckBoxText :
                                SortSelectedStyle.CheckBoxSelectedText}>{state.state_name}
                              </Text>
                            </View>
                          </View>
                          <City cities={cities} />
                        </View>
                      )
                    })
                  }
               </View>
                {/* : null */}
              {/* } */}
            </View>
          </View>
        {/* )} */}
      </View>
    </View>
  );
};

export default Location;

const styles = StyleSheet.create({});
