import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput } from 'react-native';
import First from './src/Screens/First';
import FlatListTute from './src/Screens/FlatListTute';
export default function App() {
  return (
    <View style={styles.container}>
      <First />
      <FlatListTute/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
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