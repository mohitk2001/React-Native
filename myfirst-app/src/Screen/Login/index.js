import { View, Text, Image ,Alert, KeyboardAvoidingView} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Instagram_logo from "../../../assets/Instagram.png";
import { Input, Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
const Login = () => {
  const [firstInput, setfirstInput] = useState();
  const [password, setPassword] = useState();

  const User_submit=()=>{
    // Alert.alert(firstInput);
    // Alert.alert(password);
  }
  return (
    <KeyboardAvoidingView  behaviour="padding" style={styles.Login_container}>
      <StatusBar style="dark" />
      <View style={styles.Login_sub_container}>
        <Image source={Instagram_logo} style={styles.Login_logo} />
        <Input
          placeholder="Phone number, email or username"
          style={styles.Login_Input_field}
          onChangeText={(text)=>setfirstInput(text)}
        />
        <Input placeholder="Password" style={styles.Login_Input_field} 
        onChangeText={(text)=>setPassword(text)}
        />
        <Text style={{ color: "#0196FE", textAlign: "right" }}>
          Forgotten password ?
        </Text>
        <Button title="Login" containerStyle={styles.Login_button} onPress={User_submit}/>
        <Text
          style={[
            styles.login_commonStyle,
            { color: "#fff", textAlign: "center" },
          ]}
        >
          OR
        </Text>
        <Text
          style={[
            styles.login_commonStyle,
            { color: "#0196FE", textAlign: "center" },
          ]}
        >
          <Icon
            name="facebook"
            style={{ backgroundColor: "#0196FE", color: "#000", fontSize: 15 }}
          />
          {"  "} Log in with Facebook
        </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
