import { useNavigation } from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const SelectScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleNextPress = () => {
    navigation.navigate('AnalyzeScreen', {selectedImage});
  };

  const handleSelectImage = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        setSelectedImage(response.assets[0].uri);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seçiminiz</Text>
      {selectedImage ? (
        <>
         <TouchableOpacity onPress={handleSelectImage}>
          <Image
            source={{uri: selectedImage}}
            resizeMode="contain"
            style={styles.selectedImage}
          />
        </TouchableOpacity>
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
              <Text style={styles.buttonText}>Növbəti</Text>
            </View>
          </TouchableOpacity>
        </View>
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
            <Text style={styles.buttonText}>Qaleriyadan şəkil seçin</Text>
          </TouchableOpacity>
        </>
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
  button: {
    backgroundColor: '#296D84',
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedImage: {
    width: 300,
    height: 300,
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: 'red',
  },
  buttonContainer: {
    marginTop: 52,
    width: 345,
    height: 38,
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
    flexDirection: 'row', // Flex direction set to row
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

export default SelectScreen;
