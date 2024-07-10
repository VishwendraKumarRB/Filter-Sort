import { StyleSheet } from "react-native";

const pickupSelectedStyle = StyleSheet.create({
  PickupContainer: {
    width: 352,
  },
  PickupText: {
    color: "#5C5C5C",
    marginTop: 15,
    fontSize: 12,
    fontWeight: "600",
    lineHeight: 20,
  },
  PickupLayout: {
    flexDirection: "row",
    marginTop: 8,
    // backgroundColor:"blue"
  },
  PickupComponentBtn: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 161,
    height: 48,
    marginRight: 16
  },
  PickupButtonText: {
    color: "#AEB0B0",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "400",
    fontSize: 14,
    
  },
  
  PickupShadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "B9BBB6",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  TextInput: {
    marginTop: 4,
    paddingLeft: 20,
    height: 42,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    borderRadius:5,
    width: 342,
    // backgroundColor:"#EEEEEE"

  },
  bikeModelView:{
//     width: 342,
// height: 224,
borderWidth:1,
borderRadius:5,
borderColor:"#D9D9D9",
marginTop:9,
paddingVertical:19
  }
})
export default pickupSelectedStyle