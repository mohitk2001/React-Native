import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Image, Text, View,TextInput } from 'react-native';
import First from './src/Screens/First';
import Second from './src/Screens/Second';
export default function App() {
  return (
    <View>
      <First/>
      <Second/>
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   ImageStyle:{
//     height:100,
//     width:100
//   }
//   ,
//   InputStyle:{
//     height:40,
//     width:100,
//     borderWidth:1,
//     borderColor:'red',
//   }
// });
