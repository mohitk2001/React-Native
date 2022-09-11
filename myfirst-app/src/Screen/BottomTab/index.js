import { View, Text, TouchableOpacity,Alert } from "react-native";
import React, { useState ,useLayoutEffect} from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
import { Avatar } from "@rneui/themed";

const BottomTab = () => {
  const [icons, setIcons] = useState(["home", "search", "camera", "heart"]);
  const [active,setActive]=useState(null);
  return (
    <View style={styles.Bottom_Tab_container}>
      {/* <Icon name="home" size={30}  />
      <Icon name="search" size={30} color="#000" style={styles.IconStyle} />
      <Icon name="camera" size={30} color="#000" style={styles.IconStyle} />
      <Icon name="heart" size={30} color="#000" style={styles.IconStyle} /> */}
      {icons.map((icon, index) => {
        return (
            <TouchableOpacity onPress={()=>setActive(icon)} key={index}>
                <BottomIcons iconName={icon}  Active={active} />
            </TouchableOpacity>
            )
      })}
      <Avatar
        size={30}
        rounded
        source={{
          uri: "https://res.cloudinary.com/mohit001/image/upload/v1643537485/btkbfx9dgxqzebexlged.jpg",
        }}
        containerStyle={styles.IconStyle}
      />
    </View>
  );
};

const BottomIcons = ({ iconName,Active }) => {
    console.log(Active)
  return (
      <Icon name={iconName} style={iconName===Active ? styles.Active_IconStyle : styles.IconStyle} />
  );
};
export default BottomTab;
