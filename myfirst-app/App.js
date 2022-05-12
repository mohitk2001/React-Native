import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "./src/Screen/Header";
import { SafeAreaView } from "react-native-safe-area-context";
const App = () => {
  return (
    
      <View style={styles.app_container}>
        <Header/>
      </View>
   
  );
};

export default App;

const styles = StyleSheet.create({
  app_container:{
    backgroundColor:"#000",
    height:"100%",
    width:"100%"
  }
});
