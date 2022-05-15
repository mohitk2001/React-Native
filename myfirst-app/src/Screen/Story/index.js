import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import styles from "./style";
import storyData from "./data";
const Story = () => {
  return (
    <View style={styles.Story}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {storyData.map((story, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image style={styles.story_image} source={{ uri: story.URL }} />
            <Text style={{ color: "white" }}>
              {story.name.length > 10
                ? story.name.slice(0, 10).toLowerCase()+"..."
                : story.name.toLowerCase()}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default Story;
