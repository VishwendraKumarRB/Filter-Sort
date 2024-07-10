import {View,Text, TouchableOpacity}from "react-native"
import styles from "../../styles"
import pageComponentViewstyles from "./componentStyle"

const ReUseComponent =({title,click}:any) => {
    return(
        <View style={pageComponentViewstyles.lineStyle}>
        <TouchableOpacity style={pageComponentViewstyles.pageComponentView}
         onPress={()=>click()}>    
         <Text style={ pageComponentViewstyles.pageComponentText}>
          {title}
          </Text>     
        {/* <Button title="click" onPress={()=>navigation.navigate("Sort")} /> */}
        
        </TouchableOpacity> 
         </View>
    )

}
export default ReUseComponent