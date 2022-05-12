import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    Header_container:{
        width:"100%",
        marginTop:30,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    },
    Header_Left:{
        width:"40%"
    },
    Header_logo_image:{
        width:"100%",
        height:40
    },
    Header_Right:{
        width:"50%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    Header_Text:{
        color:"white"
    }
})


export default styles;