import { View, Text,TouchableHighlight } from 'react-native'
import React from 'react'
import MenuItemScreenHeader from '../../../layouts/MenuItemScreenHeader/MenuItemScreenHeader'
import { styles } from './style'
import DownSvg from "./img/down.svg"
const SupportScreen = () => {
  return (
    <View>
      <MenuItemScreenHeader name="Support"/>
     <View  style={styles.main}>
     <Text style={styles.mainText}>Questions</Text>
     <View style={styles.questions}>
      <View style={styles.question}><Text style={styles.questionText}>What's the Phaster?</Text><TouchableHighlight underlayColor="transparent" style={{padding:14}} onPress={()=>{}}><DownSvg/></TouchableHighlight></View>
      <View style={styles.answer}></View>

     </View>
     </View>
    </View>
  )
}

export default SupportScreen