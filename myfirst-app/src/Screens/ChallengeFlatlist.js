import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const ChallengeFlatlist = () => {
  const netflixData = [
    {
      name: "Archive 81",
      year: "2022",
      creator: "Rebecca",
      genre: "Horror, Thriller",
    },
    {
      name: "Cheef",
      year: "2021-20220",
      creator: "Greg Whitely",
      genre: "Docuseries",
    },
    {
      name: "Cobra Kai",
      year: "2018-2022",
      creator: "Hayden",
      genre: "Drama",
    },
    {
      name: "The Witcher",
      year: "2020-2022",
      creator: "Lauren Schmidt",
      genre: "Reality",
    },
    {
      name: "Emily in Paris",
      year: "2020",
      creator: "Darren Star",
      genre: "Romance , Drama",
    },
    {
      name: "Death Note",
      year: "2021",
      creator: "Unknown",
      genre: "Horror, Thriller",
    },
  ];

  return (
    <View style={styles.Main_Container}>
      <Text style={[styles.Text_style]}>ChallengeFlatlist</Text>
      <FlatList
        
        
        keyExtractor={(key) => {
          return key.name;
        }}
        data={netflixData}
        renderItem={({ item }) => {
          return (
            <View style={styles.list_Style}>
              <Text style={styles.Text_style}>Name: {item.name}</Text>
              <Text style={styles.Text_style}>Year: {item.year}</Text>
              <Text style={styles.Text_style}>Creator: {item.creator}</Text>
              <Text style={styles.Text_style}>Genre: {item.genre}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  Main_Container: {
    marginTop: 30,
  },
  Text_style: {
    fontSize: 30,
  },
  list_Style:{
      backgroundColor:"purple",
      height:300,
      
      width:300,
      margin:10
  }
});
export default ChallengeFlatlist;
