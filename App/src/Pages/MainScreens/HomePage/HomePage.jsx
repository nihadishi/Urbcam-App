import {
  View,
  Text,
  ScrollView,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../layouts/Footer/Footer';
import {styles} from './style';
import {Dimensions,Linking } from 'react-native';
import MenuSvg from './img/hamburgermenu.svg';
import NotificationSvg from './img/notification.svg';
import {useMenuNotificationContext} from '../../../assets/contexts/MenuNotificationContext';
import {Image} from 'react-native-animatable';
const HomePage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const {menuIsOpen, setmenuIsOpen, notificationIsOpen, setnotificationIsOpen} =
    useMenuNotificationContext();
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: '#fff', flex: 1}}
        contentContainerStyle={{flexGrow: 1}}>
        <View style={[styles.main, {height: screenHeight}]}>
          <View>
            <View style={styles.header}>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  setmenuIsOpen(true);
                }}>
                <MenuSvg />
              </TouchableHighlight>
              <Text style={styles.headerText}>URB CAM</Text>
              <TouchableHighlight
                underlayColor="transparent"
                onPress={() => {
                  setnotificationIsOpen(true);
                }}>
                <NotificationSvg />
              </TouchableHighlight>
            </View>
            <ScrollView style={{height: screenHeight - 109}}>
              <View style={styles.topServices}>
                <Text style={styles.serviceText}>Select the service:</Text>
                
                <View style={styles.serviceItems}>
                  <TouchableHighlight
                    onPress={() => {navigation.navigate("DetectScreen")}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('./img/camera.png')}
                    />
                  </TouchableHighlight>
                 
                  <TouchableHighlight
                    onPress={() => {navigation.navigate("SelectScreen")}}
                    underlayColor="#014370"
                    style={styles.serviceItem}>
                    <Image
                      style={styles.serviceItem}
                      resizeMode="cover"
                      source={require('./img/gallery.png')}
                    />
                  </TouchableHighlight>
                </View>
              </View>
            </ScrollView>
          </View>
        <Footer value={1}/>
        </View>
      </ScrollView>
    </>
  );
};

export default HomePage;
