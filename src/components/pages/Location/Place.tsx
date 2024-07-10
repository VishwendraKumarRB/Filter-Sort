import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import SortSelectedStyle from "../Sort/SortSelectedStyle";
import Fontisto from '@expo/vector-icons/Fontisto';

const Place = ({ places = [] }) => {

    const [selectedPlace, setSelectedPlace] = useState<string | number>(0);

    return ( 
        <>
            {
                places.map((place: any, index: number) => {
                    return (
                        <>
                            <View style={SortSelectedStyle.textLayout} key={index}>
                                <View style={{ flexDirection: "row" }}>
                                    <TouchableOpacity onPress={() => setSelectedPlace(place.id)}>
                                        {selectedPlace == place.id ?
                                            <Fontisto name="checkbox-active" size={19}
                                                color={"#44B1D5"} /> :
                                            <Fontisto name="checkbox-passive"
                                                size={21} color={"#C4C4C4"} />
                                        }
                                    </TouchableOpacity>
                                    <View style={{ marginLeft: 9 }}>

                                        <Text style={selectedPlace == place.id ?
                                            SortSelectedStyle.CheckBoxText :
                                            SortSelectedStyle.CheckBoxSelectedText}>
                                            {place.location_name}</Text>
                                    </View>
                                </View>

                            </View>

                        </>
                    )
                })
            }
        </>
    );
};

export default Place;

const styles = StyleSheet.create({});
