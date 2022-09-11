import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    SignUp_container:{
        marginTop:50,
        borderTopColor:"black",
        flex:1,
        backgroundColor:"#000",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    SignUp_sub_container:{
        width:"80%",

    },
    SignUp_logo:{
        width:"100%",
        resizeMode:"contain",
        height:50
    },
    SignUp_Input_field:{
        fontSize:16,
        marginTop:20,
        color:"#fff"
    },
    SignUp_button:{
        marginTop:10
    }
    ,
    SignUp_commonStyle:{
        marginTop:10
    }
})

export default styles