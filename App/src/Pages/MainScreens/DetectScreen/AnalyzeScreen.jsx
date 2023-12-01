import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing, ImageBackground } from 'react-native';

const AnalyzeScreen = ({ route }) => {
  const selectedImage = route.params.selectedImage;
  const [animation] = useState(new Animated.Value(0));
const navigation = useNavigation();
  useEffect(() => {
    animateDots();
    setTimeout(() => {
        navigation.navigate('ResultScreen', {selectedImage });
    }, 7000);
  }, []);

  const animateDots = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
        Animated.timing(animation, {
          toValue: 0,
          duration: 1000,
          useNativeDriver: false,
          easing: Easing.linear,
        }),
      ]),
      { iterations: 10 }
    ).start();
  };

  const renderDots = () => {
    const dotStyle = {
      width: 2,
      height: 2,
      borderRadius: 2,
      backgroundColor: '#00FF00',
      marginHorizontal: 1,
      opacity: animation,
    };

    return (
      <View style={{ flexDirection: 'row', width:300, flexWrap:"wrap", gap:4, marginTop:18, justifyContent:"space-between"}}>
        
        {[...Array(1900)].map((_, index) => (
        <Animated.View key={index} style={dotStyle} />
      ))}
      </View>
    );
  };

  return (
      <ImageBackground source={require("../../../assets/img/bgg.jpg")} style={styles.backgroundImage}>
    <View style={styles.container}>
      <Text style={styles.title}>Please wait...</Text>
      {selectedImage && (
        <TouchableOpacity>
          <Image
            source={{ uri: selectedImage }}
            resizeMode="contain"
            style={styles.selectedImage}
          />
          <View style={{position:"absolute"}}>{renderDots()}</View>
        </TouchableOpacity>
      )}
    </View>
      </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: 'red',
    borderWidth:10,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Görüntüyü kaplama
  },
});

export default AnalyzeScreen;
