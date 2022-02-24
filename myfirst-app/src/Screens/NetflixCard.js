import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  Alert,
  Linking,
} from "react-native";
import React from "react";

const NetflixCard = () => {
  return (
    <View style={styles.box_card}>
      <Text style={styles.cardHead}>NetflixCard</Text>
      <Image
        source={require("../../assets/Naruto.png")}
        style={styles.ImageStyle}
      />
      <Button
        title="Watch Now"
        style={styles.buttonStyle}
        //onPress={()=>Alert.alert("You presses it")}
        onPress={() => {
          console.log("hi");
          Linking.openURL("https://www.naruget.tv/");
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  box_card: {
    width: "100%",
    borderWidth: 1,
  },
  ImageStyle: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    marginBottom: 10,
  },
  cardHead: {
    fontSize: 30,
    textAlign: "center",
    color: "#6495ed",
    marginTop: 10,
    marginBottom: 10,
  },
  buttonStyle: {
    marginTop: 10,
  },
});
export default NetflixCard;
