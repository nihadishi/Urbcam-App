import {View, Text, TouchableHighlight} from 'react-native';
import React, {useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {styles} from './style';
import {useMenuNotificationContext} from '../../assets/contexts/MenuNotificationContext';
import ProfilePhoto from './img/ProfilePhoto.svg';
import AccountSvg from './img/account';
import CoinSvg from './img/coin';
import SettingSvg from './img/settings';
import FavoriuteSvg from './img/favoriutes';
import AboutSvg from './img/about';
import SupportSvg from './img/support';
import LogoutSvg from './img/logout.svg';
import {useLoginContext} from '../../assets/contexts/LoginContext';
import {useUserInfoContext} from '../../assets/contexts/UserInfoContext';
import { useNavigation } from '@react-navigation/native';
const Menu = () => {
  const {menuIsOpen, setmenuIsOpen} = useMenuNotificationContext();
  const navigation = useNavigation();
  const {setIsLogin} = useLoginContext();
  const {userData} = useUserInfoContext();
  return (
    menuIsOpen && (
      <View style={styles.main}>
        <Animatable.View
          animation={menuIsOpen ? 'slideInLeft' : 'slideOutLeft'}
          duration={150}
          style={styles.container}>
          <View style={styles.header}>
            <View style={styles.profilePhoto}>
              <ProfilePhoto width={20} height={20} />
            </View>
            <Text style={styles.profileName}>
              {userData.name + ' ' + userData.surname}
            </Text>
          </View>
          <View style={styles.items}>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                navigation.navigate("ProfileScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <AccountSvg width={25} height={25} />
                <Text style={styles.itemText}>Profile</Text>
              </View>
            </TouchableHighlight>
            {/* <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                navigation.navigate("CoinsScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <CoinSvg width={25} height={25} />
                <Text style={styles.itemText}>My Skills</Text>
              </View>
            </TouchableHighlight> */}
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                navigation.navigate("SettingScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <SettingSvg width={25} height={25} />
                <Text style={styles.itemText}>Settings</Text>
              </View>
            </TouchableHighlight>
            {/* <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                navigation.navigate("FavScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <FavoriuteSvg width={25} height={25} />
                <Text style={styles.itemText}>Liked Jobs</Text>
              </View>
            </TouchableHighlight> */}
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                // navigation.navigate("AboutScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <AboutSvg width={25} height={25} />
                <Text style={styles.itemText}>About us</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setmenuIsOpen(false);
                // navigation.navigate("SupportScreen");
              }}
              style={{width: 'auto'}}>
              <View style={styles.item}>
                <SupportSvg width={25} height={25} />
                <Text style={styles.itemText}>Support</Text>
              </View>
            </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor="#014378"
            onPress={() => {
              setmenuIsOpen(false), setIsLogin(false);
            }}
            style={styles.logout}>
            <View style={styles.logoutButton}>
              <LogoutSvg width={20} height={20} />
              <Text style={styles.logoutText}>Çıxış</Text>
            </View>
          </TouchableHighlight>
        </Animatable.View>
        <TouchableHighlight
          style={styles.outContainer}
          underlayColor="transparent"
          onPress={() => {
            setmenuIsOpen(false);
          }}>
          <View></View>
        </TouchableHighlight>
      </View>
    )
  );
};

export default Menu;
