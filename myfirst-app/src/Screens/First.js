import React from "react";
import {View,Text,StyleSheet} from "react-native"
const First=()=>{
    return (
        <View style={styles.container}>
            <Text style={styles.firstText}>This is first</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    firstText:{
        color:"black",
        marginTop:100,
        
        fontSize:20,
        fontWeight:"bold"
    },
    container:{
        borderBottomWidth:2,
        borderBottomColor:"red"
    }
})
export default First;