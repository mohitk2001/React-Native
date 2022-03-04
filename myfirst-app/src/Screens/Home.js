import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({route}) => {
    const {name}=route.params;
  return (
    <View>
      <Text>{name}</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})