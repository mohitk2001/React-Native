import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import Instagram_logo from "../../../assets/Instagram.png";
import { TouchableOpacity } from "react-native";
const Header = () => {
  return (
    <View style={styles.Header_container}>
      <View style={styles.Header_Left}>
        <TouchableOpacity>
          <Image source={Instagram_logo} style={styles.Header_logo_image} />
        </TouchableOpacity>
      </View>
      <View style={styles.Header_Right}>
        <Text style={styles.Header_Text}>Hi</Text>
        <Text style={styles.Header_Text}>Hi</Text>
        <Text style={styles.Header_Text}>Hi</Text>
      </View>
    </View>
  );
};

export default Header;
