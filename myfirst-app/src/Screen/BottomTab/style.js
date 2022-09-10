import { StyleSheet } from "react-native";

const styles=StyleSheet.create(
    {
        Bottom_Tab_container:{
            width:"100%",
            position:"absolute",
            height:"12%",
            bottom:"3%",
            zIndex:999,
            backgroundColor:"#000",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-around",
            alignContent:"center",
          
        },
        IconStyle:{
            marginTop:10,
            color:"#fff",
            fontSize:30,
        },
        Active_IconStyle:{
            marginTop:10,
            color:"red",
            fontSize:35,
            
        }
    }
)
export default styles