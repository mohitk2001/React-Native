import { StyleSheet, Text, View, Alert, FlatList } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";

const Color = () => {
  const [color, setColor] = useState([]);
  const GenereteRGB = () => {
    const red = Math.floor(Math.random() * 257);
    const green = Math.floor(Math.random() * 257);
    const blue = Math.floor(Math.random() * 257);

    //console.log(color);
    return `rgb(${red},${green},${blue})`;
  };
  return (
    <View style={styles.color_comp}>
      <TouchableOpacity style={styles.mainButton} onPress={() =>setColor([...color,GenereteRGB()])}>
        <Text style={styles.colorText}>Color</Text>
      </TouchableOpacity>
      <FlatList
      data={color}
      showsVerticalScrollIndicator={false}
      keyExtractor={(key)=>{return key }}
      renderItem={({item})=>{
          return (
            //   console.log(item)
              <View style={{
                backgroundColor:item,
                height:100,
                width:"100%",
                marginTop:40,
                marginBottom:40
              }}>
                  <Text>{item}</Text>
              </View>
          )
      }}
      />
    </View>
  );
};

export default Color;

const styles = StyleSheet.create({
  color_comp: {
    width: "100%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
  },
  mainButton: {
    marginTop: 50,
    width: "100%",
    backgroundColor: "purple",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  colorText: {
    fontSize: 40,
  },
});
