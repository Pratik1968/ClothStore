import { StyleSheet} from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "./Home"
import AboutUs from "./AboutUs"

const Stack = createNativeStackNavigator();
const Index = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
     <Stack.Screen name = "AboutUs" component = {AboutUs} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Index

const styles = StyleSheet.create({})