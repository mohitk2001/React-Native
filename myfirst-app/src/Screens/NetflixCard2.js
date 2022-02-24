import { View, Text,StyleSheet,Alert ,Image} from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'

const NetflixCard2 = () => {
  return (
    <View style={styles.mainBox}>
      <Text style={styles.card2Head}>NetflixCard2</Text>
      <View style={styles.cardBox}>
       <TouchableOpacity
       onPress={()=>Alert.alert("U pressed image")}
       >
       <Image
        source={require("../../assets/Naruto.png")}
        style={styles.Naruto}
        />
       </TouchableOpacity>
      </View>
    </View>
  )
}
const styles=StyleSheet.create({
    mainBox:{
        width:"100%"
    },
    card2Head:{
        marginTop:20,
        fontSize:30
    },
    Naruto:{
        width:"100%",
        height:undefined,
        aspectRatio:1
    }
})
export default NetflixCard2