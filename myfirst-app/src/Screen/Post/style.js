import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    TEXT_COLOR:{
        color:"white",
        fontSize:18
    },
    post_container:{
        width:"100%",
        height:600,
        marginTop:10,
        marginBottom:10
    },
    post_Header:{
        width:"100%",
        height:"10%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderWidth:1,
        borderBottomColor:"lightgrey"
    },
    post_Header_Left:{
        display:'flex',
        flexDirection:"row",
        alignItems:"center"
    },
    post_Header_Left_Avatar:{
        width:50,
        height:50,
        borderRadius:50,
        resizeMode:"cover",
        marginHorizontal:10
    },
    post_Body:{
        height:"70%",
        width:"100%",
        
    },
    post_Body_Image:{
        height:"100%",
        width:"100%",
        resizeMode:"contain"
    },
    post_Bottom:{
        width:"100%",
        height:"20%",
        marginTop:10,
    },
    post_Bottom_Icons:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"
    }
})
export default styles