import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
const SuccessScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.successText}>Əməliyyat uğurludur.</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>
            Məbləğ 8723****6237 nömrəli hesabınıza yükləndi.
          </Text>

          <Text style={styles.dateText}>
            18 noyabr 2023
            {'\n       '}
            21:53
          </Text>
        </View>
        <Image
          style={{left: -30, top: 70}}
          source={require('./img/ticket.png')}
        />
      </View>
      <Image source={require('./img/card.png')} style={styles.image} />
       <View style={styles.button}>
       <TouchableOpacity style={styles.buttonContainer} onPress={()=>{navigation.navigate("HomeScreen")}}>
          <Text style={styles.buttonText}>Hazırdır</Text>
        </TouchableOpacity>
       </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 420,
  },
  contentContainer: {
    position: 'absolute',
    top: 85,
    left: 92,
    width: 236.3,
    height: 20.29,
  },
  successText: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    textAlign: 'center',
  },
  infoContainer: {
    position: 'absolute',
    left: -70,
    top: 443,
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoText: {
    color: 'black',
    fontSize: 11,
    fontStyle: 'italic',
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    width: 190,
    letterSpacing: 0.22,
  },
  dateText: {
    color: 'black',
    fontSize: 11,
    fontStyle: 'italic',
    fontFamily: 'Noto Sans',
    fontWeight: '400',
  },
  image: {
    position: 'absolute',
    top: 46,
    left: 10,
    width: 153,
    height: 105,
  },
  button: {
    height: 40,
    width: '100%',
    justifyContent:"center",
    alignItems:"center",
    top: 600,
    left:-10
  },
  buttonContainer: {
    width: 160,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: '#007852',
  },
  buttonText: {
    color: '#007852',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
  },
});

export default SuccessScreen;
