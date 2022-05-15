import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Header_container:{
        width:"100%",
        marginTop:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    Header_Left:{
        width:"40%"
    },
    Header_logo_image:{
        width:"100%",
        height:40,
        resizeMode:"contain"
    },
    Header_Right:{
        width:"50%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    Hedaer_right_icon:{
        height:40,
        width:40,
        resizeMode:"cover"
    },
    Header_Text:{
        color:"white"
    },
   
})


export default styles;