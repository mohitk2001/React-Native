import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

export default function FlatListTute() {
  const List = [
    { index:"1",
      name: "Rohit",
    },
    { index:"2",
      name: "Ankit",
    },
    { index:"3",
      name: "Rohit",
    },
    { index:"4",
      name: "Ankit",
    },
    { index:"5",
      name: "Rohit",
    },
    { index:"6",
      name: "Ankit",
    }
  ];
  return (
    <View>
      <Text>FlatListTute</Text>
      <FlatList
        keyExtractor={(index)=>{
            return index.index
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={List}
        renderItem={({item} )=> {
         return <Text style={styles.listStyle}>{item.name}</Text>;
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    listStyle:{
        fontSize:100,
        color:"white",
        marginLeft:10,
        marginRight:10,
        padding:10,
        backgroundColor:"blue",
        height:150
    }
});
