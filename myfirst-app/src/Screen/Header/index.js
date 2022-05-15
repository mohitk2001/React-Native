import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import styles from "./style";
import Instagram_logo from "../../../assets/Instagram.png";
import { TouchableOpacity } from "react-native";
import postPlus from "../../../assets/post.jpg";
import like from "../../../assets/like.png";
import message from "../../../assets/message.jpg"
const Header = () => {
  return (
    <View style={styles.Header_container}>
      <View style={styles.Header_Left}>
        <TouchableOpacity>
          <Image source={Instagram_logo} style={styles.Header_logo_image} />
        </TouchableOpacity>
      </View>
      <View style={styles.Header_Right}>
      <TouchableOpacity>
          <Image source={postPlus} style={styles.Hedaer_right_icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={like} style={styles.Hedaer_right_icon} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={message} style={styles.Hedaer_right_icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
