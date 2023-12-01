import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const ResultScreen = ({ route }) => {
  const navigation = useNavigation();
  const selectedImage = route.params.selectedImage;
  const handleNextPress = () => {
    navigation.navigate('DamageScreen');
  };

  const renderDots = () => {
    const dotStyle = {
      width: 3.5,
      height: 3.5,
      borderRadius: 3.5,
      backgroundColor: '#F1F0EC',
      marginHorizontal: 1,
    };

    return (
      <View style={{ flexDirection: 'row', width:300, flexWrap:"wrap", gap:4, marginTop:18, justifyContent:"space-between"}}>
        
        {[...Array(1900)].map((_, index) => (
        <View key={index} style={dotStyle} />
      ))}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
      <Image
         source={{ uri: selectedImage }}
        resizeMode="contain"
        style={styles.selectedImage}
      />
      <View style={{position:"absolute"}}>{renderDots()}</View>
        </View>
      <Text style={styles.title}>
      The artificial intelligence has convincingly demonstrated the suitability of your photo for undergoing a survey
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: 300,
        }}>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleNextPress}>
          <View style={styles.buttonInnerContainer}>
            <Text style={styles.buttonText}>Next</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F1F0EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'gray',
    marginHorizontal:10,
    marginTop:10,
    borderRadius:10,
    borderWidth:1,
    padding:20,
    borderColor:"gray"
  },
  button: {
    backgroundColor: '#296D84',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 23,
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 16,
    borderRadius: 8,
    overlayColor:"#F1F0EC"

  },
  buttonContainer: {
    marginTop: 52,
    width: 345,
    height: 58,
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor:"#000", 
    gap: 4,
    display: 'flex',
  },
  buttonInnerContainer: {
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 17,
    fontFamily: 'Noto Sans',
    fontWeight: '400',
    lineHeight: 24,
    // wordWrap: 'break-word',
  },
});

export default ResultScreen;
