import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import Header from "./src/Screen/Header";
import { SafeAreaView } from "react-native-safe-area-context";
import Story from "./src/Screen/Story";
import Post from "./src/Screen/Post";
import postData from "./src/Screen/Post/postData";
const App = () => {
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
      
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  app_container: {
    backgroundColor: "#000",
    marginTop: 50,
    height: "100%",
    width: "100%",
  },
});
