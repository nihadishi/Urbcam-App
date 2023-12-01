import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const AreyousureScreen = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <LinearGradient
          colors={['#0194CA', '#007852']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={{
            flex: 1,
            borderRadius: 63,
            padding: 2,
            paddingHorizontal: 8,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image source={require('./img/hand.png')} style={styles.image} />
        </LinearGradient>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.offerText}>Təklif</Text>
        <Text style={styles.offerAmount}>693₼</Text>
        <Text style={styles.acceptanceText}>
          Bu məbləği elə indicə qəbul etməyə razısınızmı?
        </Text>
        <View style={styles.separator} />
      </View>
      <View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.acceptButton}
            onPress={() => {
                navigation.navigate("SuccessScreen")
            }}>
            <Text style={styles.buttonText}>Qəbul et</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.rejectButton}
            onPress={() => {
              navigation.navigate("HomeScreen")
            }}>
            <Text style={styles.buttonText2}>Rədd et</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.placeholderText}>
        Əgər zərərin daha çox olduğunu düşünürsünüzsə,
        {"\n"}
        “rədd et” cavabını seçin.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minHeight: 291,
    marginTop:100,
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    width: 126,
    height: 126,
    padding: 16,
    overflow: 'hidden',
    marginBottom: 8,
  },
  image: {
    width: 68,
    height: 67,
    resizeMode: 'cover',
  },
  textContainer: {
    width: '100%',
    height: 188,
  },
  offerText: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  offerAmount: {
    color: 'black',
    fontSize: 25,
    fontFamily: 'Noto Sans',
    fontWeight: '500',
    textAlign: 'center',
    marginBottom: 8,
  },
  acceptanceText: {
    color: '#292929',
    fontSize: 15,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    textAlign: 'center',
    marginBottom: 8,
  },
  separator: {
    width: '100%',
    height: 24,
    backgroundColor: 'transparent', // Adjust as needed
  },
  buttonContainer: {
    width: 300,
    marginBottom: 8,
  },
  acceptButton: {
    width: '100%',
    padding: 8,
    backgroundColor: '#007852',
    borderRadius: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rejectButton: {
    width: '100%',
    height: 40,
    padding: 8,
    borderRadius: 40,
    borderColor: '#296D84',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    lineHeight: 20,
  },
  buttonText2: {
    color: '#007852',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    lineHeight: 20,
  },
  placeholderText: {
    color: '#292929',
    fontSize: 12,
    fontStyle: 'italic',
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    marginTop: 8,
  },
});

export default AreyousureScreen;
