import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import Logo from "../../../assets/img/logoHD.png"
import {styles} from './style';
import LinearGradient from 'react-native-linear-gradient';

function WelcomePage({navigation}) {
  return (
    <View style={styles.container}>
       <LinearGradient
        colors={['rgba(255, 255, 255, 1.00)', '#fff', '#2C6377']}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
      <View style={styles.onboardingContainer}>
      <View style={styles.backgroundContainer}>
        <View style={styles.gradientContainer}>
          {/* ... Gradient */}
          <View style={styles.indiContainer}>
            <Text style={styles.onboardingText}>
              Sürətli diaqnoz,{'\n'}anında ödəniş!
            </Text>
            <TouchableHighlight style={styles.checkButton} underlayColor="transparent" onPress={()=>{navigation.navigate('HomeScreen')}}>
              <Text style={styles.checkButtonText}>İndi yoxla</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={styles.headerContainer}>
        {/* ... Header */}
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/img/logoHD.png")}
          style={styles.backgroundImage}
        />
      </View>
    </View>
    </LinearGradient>
      </View>
  );
}

export default WelcomePage;

