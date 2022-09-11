import { View, Text, Image ,Alert, KeyboardAvoidingView} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import Instagram_logo from "../../../assets/Instagram.png";
import { Input, Button } from "@rneui/themed";
import Icon from "react-native-vector-icons/FontAwesome";
import { StatusBar } from "expo-status-bar";
import firebase from "../../../firebase";
const SignUp = () => {
  const [mobile, setMobile] = useState();
  const [password, setPassword] = useState();
  const [fullName, setfullName] = useState();
  const [userName, setUsername] = useState();

  const User_submit=()=>{
    // Alert.alert(firstInput);
    // Alert.alert(password);
  }
  return (
    <KeyboardAvoidingView  behaviour="padding" style={styles.SignUp_container}>
      <StatusBar style="dark" />
      <View style={styles.SignUp_sub_container}>
        <Image source={Instagram_logo} style={styles.SignUp_logo} />
        <Input
          placeholder="Mobile number or email"
          style={styles.SignUp_Input_field}
          onChangeText={(text)=>setMobile(text)}
        />
        <Input placeholder="Full Name" style={styles.SignUp_Input_field} 
        onChangeText={(text)=>setfullName(text)}
        
        />
        <Input
          placeholder="Username"
          style={styles.SignUp_Input_field}
          onChangeText={(text)=>setUsername(text)}
        />
        <Input
          placeholder="Password"
          style={styles.SignUp_Input_field}
          onChangeText={(text)=>setPassword(text)}
          type="password" secureTextEntry
        />
        <Text style={{ color: "#0196FE", textAlign: "right" }}>
          Forgotten password ?
        </Text>
        <Button title="Sign Up" containerStyle={styles.SignUp_button} onPress={User_submit}/>
        <Text
          style={[
            styles.SignUp_commonStyle,
            { color: "#fff", textAlign: "center" },
          ]}
        >
          OR
        </Text>
        <Text
          style={[
            styles.SignUp_commonStyle,
            { color: "#0196FE", textAlign: "center" },
          ]}
        >
          <Icon
            name="facebook"
            style={{ backgroundColor: "#0196FE", color: "#000", fontSize: 15 }}
          />
          {"  "}  Log In with Facebook
        </Text>
        <Text  style={[
            styles.SignUp_commonStyle,
            { color: "#fff", textAlign: "center" },
          ]}>Have an account? <Text style={{color:"#0196FE"}}>Login</Text>  </Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
