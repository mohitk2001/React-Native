import { StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity,Alert } from 'react-native'
import Checkbox from 'expo-checkbox'
const FormInput = () => {
    const [agree,setAgree]=useState(false);
    const [name, setName] = useState("");
    const [password, setPassword] = useState("")
    const submit=()=>{
        Alert.alert(name +" and "+ password);
    }
  return (
    <View style={styles.Main_container}>
      <Text style={styles.main_head}>Welcome to our arc</Text>
      <View>
          <Text style={styles.form_text}>Enter Your Name</Text>
          <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.input_field}
          value={name}
          onChangeText={(e)=>setName(e)}
          />
          <Text style={styles.form_text}>Enter Your Password</Text>
          <TextInput
          autoCapitalize='none'
          autoCorrect={false}
          secureTextEntry={true}
          style={styles.input_field}
          value={password}
          onChangeText={(e)=>setPassword(e)}
          />
          <Checkbox
          value={agree}
          color={agree?"blue":undefined}
          onValueChange={()=>setAgree(!agree)}
          />
      </View>
      <TouchableOpacity
      onPress={()=>submit()}
      style={[styles.submit_btn,{backgroundColor:agree?"purple":"grey"}]}
      disabled={!agree}
      >
          <Text style={[styles.form_text,{color:"white"}]}>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
    Main_container:{
        marginTop:50,
        width:"100%",
        padding:10
    },
    main_head:{
        fontSize:40,
        marginBottom:20
    },
    form_text:{
        fontSize:30
    },
    input_field:{
        borderWidth:2,
        borderColor:"purple",
        marginVertical:10,
        padding:10,
        fontSize:25
    },
    submit_btn:{
        width:"100%",
       
        
        marginTop:10,
        paddingLeft:10
    }
})
export default FormInput

