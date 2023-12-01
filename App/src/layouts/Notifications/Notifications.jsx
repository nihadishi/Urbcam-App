import {View, Text, TouchableHighlight, Image, ScrollView} from 'react-native';
import React from 'react';
import * as Animatable from 'react-native-animatable';
import {styles} from './style';
import {useMenuNotificationContext} from '../../assets/contexts/MenuNotificationContext';

const Notifications = () => {
  const {menuIsOpen, setmenuIsOpen, notificationIsOpen, setnotificationIsOpen} =
    useMenuNotificationContext();
  return (
    notificationIsOpen && (
      <View style={styles.main}>
        <Animatable.View
          animation={notificationIsOpen ? 'slideInRight' : 'slideOutRight'}
          duration={150}
          style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Notifications</Text>
          </View>
          
        </Animatable.View>
        <TouchableHighlight
          style={styles.outContainer}
          underlayColor="transparent"
          onPress={() => {
            setnotificationIsOpen(false);
          }}>
          <View></View>
        </TouchableHighlight>
      </View>
    )
  );
};

export default Notifications;
