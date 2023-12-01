import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  TextInput,
} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const SelectScreen = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleNextPress = () => {
    navigation.navigate('ResultScreen', {selectedImage});
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
      <Text style={styles.title}>Your choice</Text>
      {selectedImage ? (
        <>
          <TouchableOpacity onPress={handleSelectImage}>
            <Image
              source={{uri: selectedImage}}
              resizeMode="contain"
              style={styles.selectedImage}
            />
          </TouchableOpacity>
          <View style={styles.inputs}>
            <TextInput
              style={styles.input}
              placeholderTextColor={'black'}
              placeholder="Problem"
            />
          </View>
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
        </>
      ) : (
        <>
          <TouchableOpacity style={styles.button} onPress={handleSelectImage}>
            <Text style={styles.buttonText}>
              Select a photo from the gallery
            </Text>
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
    backgroundColor: '#F1F0EC',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: 'black',
  },
  button: {
    backgroundColor: 'black',
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
    height: 48,
    paddingTop: 6,
    paddingBottom: 8,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 40,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'black',
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
  inputs: {
    width:"83%",
    borderRadius:10,
    flexDirection:"column",
    gap:10,
    marginTop:10
  },
  input: {
    color: 'black',
    borderWidth:1,
    borderRadius:10,
    textAlign:"center",
    fontSize:20
  },
});

export default SelectScreen;
