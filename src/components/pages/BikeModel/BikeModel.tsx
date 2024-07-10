import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import pickupSelectedStyle from "../Pickup/pickupSelectedStyle";
import Fontisto from '@expo/vector-icons/Fontisto';
import SortSelectedStyle from "../Sort/SortSelectedStyle";

const BikeModel = () => {
  const bikeModelData = [
    {
      name: "Bike model 1",
      id: 1,
    },
    {
      name: "Bike model 2",
      id: 2,
    },
    {
      name: "Bike model 3",
      id: 3
    },
    {
      name: "Bike model 4",
      id: 4,
    },
    {
      name: "Bike model 5",
      id: 5,
    },
    {
      name: "Bike model 6",
      id: 6,
    },
  ];
  // const [bikeModelSelected, setBikeModelSelected] = useState<boolean>(false);
  const [bikeModelView, setBikeModelView] = useState<string | number>(0);
  // const [dropDown, setDropDown] = useState<boolean>(false)
  return (
    <View style={pageComponentViewstyles.lineStyle}>
      <View
        style={pageComponentViewstyles.pageComponentView}>
        {/* {bikeModelSelected == false ? (
          <TouchableOpacity onPress={() => setBikeModelSelected(!bikeModelSelected)}>
            <Text style={pageComponentViewstyles.pageComponentText}>
              Bike Model
            </Text>
          </TouchableOpacity>
        ) : ( */}
          <View>
            {/* <TouchableOpacity onPress={() => setBikeModelSelected(!bikeModelSelected)}> */}
              <Text style={pageComponentViewstyles.selectedText}>
                Bike Model
              </Text>
            {/* </TouchableOpacity> */}
            <View style={pickupSelectedStyle.PickupContainer}>
              <Text style={pickupSelectedStyle.PickupText}>Search bike model</Text>
              {/* <View style={{ flex: 1, flexDirection: "row" }}> */}
                {/* <View style={{ flex: 9 }}> */}
                  <TextInput placeholder="Search Bike model"
                    style={pickupSelectedStyle.TextInput}>

                  </TextInput>
                {/* </View> */}
                {/* <TouchableOpacity style={{ flex: 1, justifyContent: "center" }}
                  onPress={() => setDropDown(!dropDown)}>
                  {
                    dropDown === true ? <Fontisto name="angle-up" size={15} color="black" /> :
                      <Fontisto name="angle-down" size={15} color="black" />
                  }

                </TouchableOpacity> */}

              {/* </View> */}
              {/* {dropDown === true ? */}
                <View style={pickupSelectedStyle.bikeModelView}>
                  {
                    bikeModelData.map((item, index) => {
                      return (
                        <View style={SortSelectedStyle.textLayout} key={index}>
                          <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity onPress={() => setBikeModelView(item.id)}>
                              {bikeModelView == item.id ? <Fontisto name="checkbox-active" 
                              size={19} color={"#44B1D5"} /> :
                                <Fontisto name="checkbox-passive" size={21} color={"#C4C4C4"} />
                              }
                            </TouchableOpacity>
                            <View style={{ marginLeft: 9 }}>

                              <Text style={bikeModelView == item.id ? 
                              SortSelectedStyle.CheckBoxText :
                                SortSelectedStyle.CheckBoxSelectedText}>{item.name}</Text>
                            </View>

                          </View>
                        </View>

                      )
                    })
                  }
                </View> 
                {/* : null
              } */}


            </View>

          </View>
        {/* )} */}

      </View>
    </View>
  );
};

export default BikeModel;

const styles = StyleSheet.create({});
