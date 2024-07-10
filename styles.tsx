import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mainHeader: {
    alignItems: "center",
    marginTop: 50,
    flexDirection: "row",
    // backgroundColor:"blue"
  },
  headerText: {
    fontWeight: "bold",
    flex: 1,
    height: 22,
    width: 168,
    fontSize: 16,
    lineHeight: 21,
    justifyContent: "center",
    textAlign: "center",
  },
  backImage: {
    height: 25,
    width: 25,
    color: "black",
  },
  mainFooter: {
    justifyContent: "center",
    flexDirection: "row",
    margin: 28,
  },
  clearBtn: {
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#fff",
    borderRadius: 5,
    width: 163,
  },
  footerBtnText: {
    color: "black",
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    height:20,
    fontSize:14,

  },
  applyBtn: {
    marginLeft: 16,
    paddingTop: 14,
    paddingBottom: 14,
    backgroundColor: "#FED24F",
    borderRadius: 5,
    height:48,

    width: 163,
  },
  shadowProp: {
    shadowOffset: { width: -2, height: 4 },
    shadowColor: "B9BBB6",
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 2,
  },
  componentView: {
    flex: 1,
    marginTop: 72,
  },
});
export default styles;
