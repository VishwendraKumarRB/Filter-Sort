import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import SortSelectedStyle from "../Sort/SortSelectedStyle";
import Fontisto from '@expo/vector-icons/Fontisto';
import Place from "./Place";

const City = ({ cities = [] }) => {

    const [selectedCity, setCity] = useState<string | number>(0);

    return (
        <>
            {
                cities.map((city: any, index: number) => {
                    let places = [];
                    if (selectedCity === city.id) {
                        places = city.location
                    }
                    return (
                        <View style={SortSelectedStyle.textLayout} key={index}>
                            <View style={{ flexDirection: "row" }}>
                                <TouchableOpacity onPress={() => setCity(city.id)}>
                                    {selectedCity == city.id ? <Fontisto name="checkbox-active"
                                        size={19} color={"#44B1D5"} /> :
                                        <Fontisto name="checkbox-passive" size={21}
                                            color={"#C4C4C4"} />
                                    }

                                </TouchableOpacity>
                                <View style={{ marginLeft: 9 }}>

                                    <Text style={selectedCity == city.id ?
                                        SortSelectedStyle.CheckBoxText :
                                        SortSelectedStyle.CheckBoxSelectedText}>
                                        {city.city_name}</Text>
                                </View>
                            </View>
                            <Place places={places} />
                        </View>
                    )

                })
            }
        </>
    );
};

export default City;

const styles = StyleSheet.create({});
