import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import firestore from '@react-native-firebase/firestore';
const App = () => {
  useEffect(()=>{
    const usersCollection = firestore().collection('testing');
  },[])
  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({})