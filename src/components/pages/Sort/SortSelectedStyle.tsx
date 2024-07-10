import { StyleSheet } from "react-native";

const SortSelectedStyle = StyleSheet.create({
 
  CheckBoxSelectedText:{
    color: "#AEB0B0",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
  },
  
  CheckBoxText: {
    color: "#000000",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
  },
  sortSelectedView: {
    flexDirection: "row",
    width: 337,
    height: 25,
    marginTop: 11
  },
  textLayout: {
    width: 301,
    marginLeft:15,
    // flexWrap:"wrap",
    marginVertical:2

  }
});

export default SortSelectedStyle;
