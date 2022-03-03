import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput } from 'react-native';
import ChallengeFlatlist from './src/Screens/ChallengeFlatlist';
import Color from './src/Screens/Color';
import Counter from './src/Screens/Counter';
import First from './src/Screens/First';
import FlatListTute from './src/Screens/FlatListTute';
import NetflixCard from './src/Screens/NetflixCard';
import NetflixCard2 from './src/Screens/NetflixCard2';
import FormInput from './src/Screens/FormInput';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <First /> */}
      {/* <FlatListTute/> */}
      {/* <NetflixCard/> */}
      {/* <NetflixCard2/> */}
      {/* <NetflixCard/> */}
      {/* <ChallengeFlatlist/> */}
      {/* <Counter/> */}
      {/* <Color/> */}
      <FormInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flexDirection:"column",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
 
});
// ImageStyle:{
//   height:100,
//   width:100
// }
// ,
// InputStyle:{
//   height:40,
//   width:100,
//   borderWidth:1,
//   borderColor:'red',
// }