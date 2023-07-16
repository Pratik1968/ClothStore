import { View,Image,StyleSheet } from 'react-native'
import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
const AppBar = () => {
  return (
    <View style={[styles.appBar,{alignItems:"center",justifyContent:"space-between"}]}>
      <Image style = {[styles.logo,{alignSelf:"flex-start"}]} source={require("../../assets/shop.png")} resizeMode="contain"/>
<Image style = {[styles.search,{alignSelf:"flex-end"}]} source={require("../../assets/search.png")} resizeMode="contain"/>
    </View>
  )
}
const styles = EStyleSheet.create({
    appBar:{
        width:"100%",
        backgroundColor:'#FF304F',
        flexDirection:'row',

    },
    logo:{
        width:"1.4rem",
        height:"1.7rem",
        marginTop:"1.37rem",
        marginBottom:"1.44rem",
        marginLeft:"3.19rem",
    
    },
    search:{
        width: '1.4rem',
height: '1.7rem',
marginTop:"1.69rem",
marginBottom:"1.44rem",

marginRight:"3.19rem",
    }
})
EStyleSheet.build();
export default AppBar