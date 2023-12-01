import React from 'react';
import {Image, Dimensions, Text} from 'react-native';
import { View } from 'react-native-animatable';

function StartScreen() {
  const screenHeight = Dimensions.get('window').height;
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={{backgroundColor:"#000",alignItems:"center",justifyContent:"center", height:screenHeight}}>
    {/* <Image
      style={{width: "100%",objectFit:"contain" }}
      source={require('../../assets/img/main_logo.png')}
    /> */}
    <Text style={{fontSize:40, fontWeight:600}}>U R B C A M</Text>
    </View>
  );
}

export default StartScreen;
