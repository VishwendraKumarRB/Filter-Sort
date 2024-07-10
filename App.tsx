import Sort from "./src/components/pages/Sort/Sort";
import Pickup from "./src/components/pages/Pickup/Pickup";
import Dropoff from "./src/components/pages/Dropoff/Dropoff";
import Location from "./src/components/pages/Location/Location";
import BikeModel from "./src/components/pages/BikeModel/BikeModel";
import PhoneNumber from "./src/components/pages/PhoneNumber/PhoneNumber";
import Email from "./src/components/pages/Email/Email";
 import styles from "./styles";
import {  ScrollView, Text, TouchableOpacity, View } from "react-native";
import{NavigationContainer} from "@react-navigation/native"
import{createNativeStackNavigator} from '@react-navigation/native-stack'
// import pageComponentViewstyles from "./src/components/componentStyle";
import ReUseComponent from "./src/components/reUsable";
const Stack = createNativeStackNavigator();
const App =()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="FILTER & SORT" component={Home}/>
        <Stack.Screen name="Sort" component={Sort}/>
        <Stack.Screen name="Pickup" component={Pickup}/>
        <Stack.Screen name="Dropoff" component={Dropoff}/>
        <Stack.Screen name="Location" component={Location}/>
        <Stack.Screen name="BikeModel" component={BikeModel}/>
        <Stack.Screen name="PhoneNumber" component={PhoneNumber}/>
        <Stack.Screen name="Email" component={Email}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};
const Home =({navigation}:any)=>{
// return(
//   console.warn(props.navigation.navigate)
// )
  return(
    <View style={styles.container}>
      <ScrollView style={styles.componentView}>
        <ReUseComponent click={()=>navigation.navigate("Sort")} title={"Sort"} />
        <ReUseComponent click={()=>navigation.navigate("Pickup")} title={"Pickup"} />
        <ReUseComponent click={()=>navigation.navigate("Dropoff")} title={"Dropoff"} />
        <ReUseComponent click={()=>navigation.navigate("Location")} title={"Location"} />
        <ReUseComponent click={()=>navigation.navigate("BikeModel")} title={"BikeModel"} />
        <ReUseComponent click={()=>navigation.navigate("PhoneNumber")} title={"PhoneNumber"} />
        <ReUseComponent click={()=>navigation.navigate("Email")} title={"Email"} />      
      {/* <View style={pageComponentViewstyles.lineStyle}>
        <TouchableOpacity style={pageComponentViewstyles.pageComponentView}
         onPress={()=>navigation.navigate("Sort")}>    
         <Text style={ pageComponentViewstyles.pageComponentText}>
          Sort
          </Text>     
        {/* <Button title="click" onPress={()=>navigation.navigate("Sort")} /> */}
        
        {/* </TouchableOpacity> 
         </View> */} 
        {/* <TouchableOpacity onPress={()=>navigation.navigate("Pickup")}>
        <Pickup />
        </TouchableOpacity>      
        <TouchableOpacity onPress={()=>navigation.navigate("Dropoff")}>
        <Dropoff />
        </TouchableOpacity>  
        <TouchableOpacity onPress={()=> navigation.navigate("Location")}>
        <Location />   
         </TouchableOpacity>  
        <TouchableOpacity onPress={()=>navigation.navigate("BikeModel")}>
        <BikeModel />
        </TouchableOpacity>  
        <TouchableOpacity onPress={()=>navigation.navigate("PhoneNumber")}>
        <PhoneNumber />
        </TouchableOpacity>  
        <TouchableOpacity onPress={()=>navigation.navigate("Email")}>
        <Email />
        </TouchableOpacity>   */}
         
      </ScrollView>
      <View style={styles.mainFooter}>
        <TouchableOpacity style={[styles.clearBtn, styles.shadowProp]}>
          <Text style={styles.footerBtnText}>CLEAR</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.applyBtn, styles.shadowProp]}>
          <Text style={styles.footerBtnText}>APPLY</Text>
        </TouchableOpacity>
      </View>
    </View>
  )}
export default App