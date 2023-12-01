import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Animated, Easing } from 'react-native';

const AnalyzeScreen = ({ route }) => {
  const selectedImage = route.params.selectedImage;
  const [animation] = useState(new Animated.Value(0));
const navigation = useNavigation();
  useEffect(() => {
    animateDots();
    setTimeout(() => {
        navigation.navigate("ResultScreen")
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
    <View style={styles.container}>
      <Text style={styles.title}>Zəhmət olmasa gözləyin...</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#296D84',
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
  },
});

export default AnalyzeScreen;
