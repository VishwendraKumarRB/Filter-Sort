import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import pageComponentViewstyles from "../../componentStyle";
import Fontisto from '@expo/vector-icons/Fontisto';

import SortSelectedStyle from "./SortSelectedStyle";

const Sort = (props:any) => {
  // console.warn(props)
  const [sortSelected, setSortSelected] = useState<boolean>(false);
  const [checkboxSelected, setCheckboxSelected] = useState<boolean>(false)
  return (
    <View style={pageComponentViewstyles.lineStyle}>
      {/* <TouchableOpacity onPress={()=>props.navigation.navigate("Home")}> */}
      <View
        style={pageComponentViewstyles.pageComponentView}>
        {/* <TouchableOpacity
          onPress={() => setSortSelected(!sortSelected)}>
          <Text style={sortSelected ? pageComponentViewstyles.selectedText :
            pageComponentViewstyles.pageComponentText}> 
            Sort</Text>
        </TouchableOpacity> */}
        <Text style={ pageComponentViewstyles.selectedText}>Sort</Text>
        {/* {sortSelected && */}
         <View>
          <View style={SortSelectedStyle.sortSelectedView}>
            <TouchableOpacity
              onPress={() => setCheckboxSelected(!checkboxSelected)}>
              {
                !checkboxSelected ? <Fontisto name="checkbox-active" size={19} color={"#44B1D5"}/>
                :<Fontisto name="checkbox-passive" size={21} color={"#C4C4C4"} />
              }
            </TouchableOpacity>
            <View style={SortSelectedStyle.textLayout}>
              <Text style={SortSelectedStyle.CheckBoxText}>
                Date-Oldest-Newest
              </Text>
            </View>
          </View>

          <View style={SortSelectedStyle.sortSelectedView}>
            <TouchableOpacity onPress={() => setCheckboxSelected(!checkboxSelected)}>
              {
                checkboxSelected ? <Fontisto name="checkbox-active" size={19} color={"#44B1D5"} /> :
                  <Fontisto name="checkbox-passive" size={21} color={"#C4C4C4"} />
             }
            </TouchableOpacity>
            <View style={SortSelectedStyle.textLayout}>
              <Text style={SortSelectedStyle.CheckBoxText}>
                Date-Oldest-Newest
              </Text>
            </View>
          </View>
        </View>
        {/* } */}
      </View>
      {/* </TouchableOpacity> */}
    </View>
  );
};

export default Sort;

const styles = StyleSheet.create({});
