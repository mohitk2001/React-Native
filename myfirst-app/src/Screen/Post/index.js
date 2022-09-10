import { Text, View, Image, ScrollView } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/FontAwesome";
//import { Divider } from 'react-native-elements';
const Post = ({ post_details }) => {
  return (
    <View style={styles.post_container}>
      <PostHeader
        userAvatar={post_details.avatar_post}
        userName={post_details.username}
      />
      <PostBody post={post_details} />
      <PostBottom post={post_details} />
    </View>
  );
};
const PostHeader = ({ userAvatar, userName }) => {
  return (
    <View style={styles.post_Header}>
      <View style={styles.post_Header_Left}>
        <Image
          source={{ uri: userAvatar }}
          style={styles.post_Header_Left_Avatar}
        />
        <Text style={[styles.TEXT_COLOR]}>{userName}</Text>
      </View>
      <View style={styles.post_Header_Right}>
        <Text style={[styles.TEXT_COLOR, { fontSize: 25 }]}>...</Text>
      </View>
    </View>
  );
};
const PostBody = ({ post }) => {
  return (
    <View style={styles.post_Body}>
      <Image source={{ uri: post.imgUrl }} style={styles.post_Body_Image} />
    </View>
  );
};

const PostBottom = ({ post }) => {
  return (
    <View style={styles.post_Bottom}>
      <View style={styles.post_Bottom_Icons}>
      <Icon name="heart" size={30} color="#fff" />
      <Icon name="comment" size={30} color="#fff" />
      <Icon name="share" size={30} color="#fff" />
      </View>
      {post.caption && (
        <Text style={[styles.TEXT_COLOR, { marginVertical: 10 }]}>
          <Text style={{ fontWeight: "800" }}>{post.username}</Text> :{" "}
          {post.caption}{" "}
        </Text>
      )}
      <View style={styles.post_Bottom_Comments}>
        {!!post.comments.length && (
          <Text style={{ color: "grey" }}>
            View{" "}
            {post.comments.length > 0
              ? post.comments.length > 2
                ? "all"
                : post.comments.length
              : ""}{" "}
            {post.comments.length === 1 ? "comment" : "comments"}
          </Text>
        )}
      </View>
    </View>
  );
};
export default Post;
