import { View, Text, Button,SafeAreaView,StyleSheet,StatusBar,Image } from 'react-native'
import React from 'react'
import AppBar from './component/AppBar'
const Home = ({navigation}) => {
  return (
  <SafeAreaView styles = {styles.container}>
    
    <StatusBar backgroundColor={"#FF304F"}/>
     <AppBar/>
  <Image source={{uri:"http://192.168.29.58:5000/getPosterHomeScreen"}} />
</SafeAreaView>
  )
}
const styles = StyleSheet.create({
 container:{
  flex:1,
background:"#3B5323"
 },

})
export default Home