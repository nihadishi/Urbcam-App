import { View, Text } from 'react-native'
import React from 'react'
import "./style"
import MenuItemScreenHeader from '../../../layouts/MenuItemScreenHeader/MenuItemScreenHeader'

const SettingScreen = () => {
  return (
    <View>
      <MenuItemScreenHeader name="Settings"/>
      <Text>SettingScreen</Text>
    </View>
  )
}

export default SettingScreen