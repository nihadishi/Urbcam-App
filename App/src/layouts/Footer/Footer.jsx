import {View, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import React, {useEffect, useState} from 'react';
import {styles} from './style';
import Home from './img/home.svg';
import HomeSelected from './img/homeSelected.svg';
import Sos from './img/sos.svg';
import SosSelected from './img/sosSelected.svg';
import Last from './img/last.svg';
import LastSelected from './img/lastSelected.svg';
import Service from './img/service.svg';
import ServiceSelected from './img/serviceSelected.svg';
import Profile from './img/profile.svg';
import ProfileSelected from './img/profileSelected.svg';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Footer = (value) => {
  // console.log(value);
  const [select, setselect] = useState(value);
  useEffect(() => {
    setselect(value.value)
  }, [value])
  

  const navigation = useNavigation();

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('state', () => {
  //     const currentRouteName = navigation.getCurrentRoute().name;
  //     if (currentRouteName === 'HomeScreen') {
  //       setselect(1);
  //     } else if (currentRouteName === 'RecentScreen') {
  //       setselect(3);
  //     } else if (currentRouteName === 'ServiceScreen') {
  //       setselect(4);
  //     } else if (currentRouteName === 'ProfileScreen') {
  //       setselect(5);
  //     }
  //   });

  //   return unsubscribe;
  // }, [navigation]);
  // const screenHeight = Dimensions.get('window').height;
  
  return (
    <View style={[styles.footer]}>
      <TouchableHighlight underlayColor="transparent" onPress={()=>{navigation.navigate("HomeScreen")}}>
      <View style={styles.items}>
        <View style={styles.svg}>{select===1? <HomeSelected width={25} height={25} fill={'#000'} />:<Home width={25} height={25} fill={'#000'} />}
        </View>
        <Text style={select===1? styles.footerTextSelected : styles.footerText}>Main</Text>
      </View>
      </TouchableHighlight>
      {/* <TouchableHighlight underlayColor="transparent" onPress={()=>{navigation.navigate("RecentScreen")}}>
      <View style={styles.items}>
        <View style={styles.svg}>{select===3? <LastSelected width={25} height={25} fill={'red'} />:<Last width={25} height={25} fill={'red'} />}</View>
        <Text style={select===3? styles.footerTextSelected : styles.footerText}>Tarixçə </Text>
      </View>
      </TouchableHighlight> */}
      <TouchableHighlight underlayColor="transparent" onPress={()=>{navigation.navigate("ProfileScreen")}}>
      <View style={styles.items}>
        <View style={styles.svg}>{select===5? <ProfileSelected width={25} height={25} fill={'red'} />:<Profile width={25} height={25} fill={'red'} />}</View>
        <Text style={select===5? styles.footerTextSelected : styles.footerText}>Profile</Text>
      </View>
      </TouchableHighlight>
    </View>
  );
};

export default Footer;
