import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Login_container:{
        marginTop:50,
        borderTopColor:"black",
        flex:1,
        backgroundColor:"#000",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    Login_sub_container:{
        width:"80%",

    },
    Login_logo:{
        width:"100%",
        resizeMode:"contain",
        height:50
    },
    Login_Input_field:{
        fontSize:16,
        marginTop:20,
        color:"#fff"
    },
    Login_button:{
        marginTop:20
    }
    ,
    login_commonStyle:{
        marginTop:20
    }
})

export default styles