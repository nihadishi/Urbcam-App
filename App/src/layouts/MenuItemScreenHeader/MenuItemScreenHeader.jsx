import { View, Text,TouchableHighlight } from 'react-native'
import React from 'react'
import {styles} from './style';
import GoBackSvg from "../../assets/img/goBack.svg"
import { useNavigation } from '@react-navigation/native';
const MenuItemScreenHeader = ({name}) => {
    const navigation = useNavigation()
  return (
    <View style={styles.container}>
        <TouchableHighlight underlayColor="transparent" onPress={()=>{navigation.navigate("HomeScreen")}} style={styles.svgContainer}><GoBackSvg width={20} height={20} style={styles.svg}/></TouchableHighlight>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default MenuItemScreenHeader