import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./src/Screen/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Story from "./src/Screen/Story";
const App = () => {
  return (
    
      <View style={styles.app_container}>
        <Header/>
        <Story/>
      </View>
   
  );
};

export default App;

const styles = StyleSheet.create({
  app_container:{
    backgroundColor:"#000",
    marginTop:35,
    height:"100%",
    width:"100%"
  }
});
