import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "./src/Screen/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Story from "./src/Screen/Story";
import Post from "./src/Screen/Post";
import postData from "./src/Screen/Post/postData";
import BottomTab from "./src/Screen/BottomTab";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from "./src/Screen/Login";
import SignUp from "./src/Screen/Signup";
const Stack = createNativeStackNavigator();
const globalScreenOption={
  headerStyle:{backgroundColor:"#000"},
  headerShown:false,
  headerTitleColor:{color:"white"}
}
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Signup" screenOptions={globalScreenOption}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={SignUp} />
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
};
const HomeScreen=()=>{
  return (
    <View style={styles.app_container}>
        <Header />
        <Story />
        {/* <Post/> */}
        <ScrollView showsHorizontalScrollIndicator={false}>
          {postData.map((post, index) => {
            return <Post post_details={post} key={index} />;
          })}
        </ScrollView>
        <BottomTab/>
      </View>
  )
}
export default App;

const styles = StyleSheet.create({
  app_container: {
    backgroundColor: "#000",
    marginTop: 50,
    height: "100%",
    width: "100%",
  },
});
