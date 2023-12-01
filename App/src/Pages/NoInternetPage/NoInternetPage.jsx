import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import RefreshSvg from "./img/refresh.svg";
import {styles} from './style';

const NoInternetPage = ({navigation}) => {
  return (
    <View style={styles.main}>
      <Text style={styles.noConnection}>NO INTERNET</Text>
      <Image style={styles.needy} source={require('../InitialScreens/WelcomePage/img/welcome_main.png')} />
      <Text style={styles.checkConnection}>
        Check your connection
      </Text>
      <TouchableHighlight style={styles.button} underlayColor="#066AAE" onPress={()=>{navigation.navigate('NoInternetScreen')}}>
        <View style={styles.refresh}>
          <RefreshSvg width={17} height={17}/>
            <Text style={styles.refreshText} >Reload</Text>
        </View>
      </TouchableHighlight>
    </View>
  );
};

export default NoInternetPage;
