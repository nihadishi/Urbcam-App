'use strict';
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
  PermissionsAndroid,
} from 'react-native';
import {useCameraDevice, Camera} from 'react-native-vision-camera';
import {useNavigation} from '@react-navigation/native';
const DetectScreen = () => {
    const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleNextPress = () => {
    navigation.navigate('AnalyzeScreen', {selectedImage });
  };

  async function requestCameraPermission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Camera Permission',
          message: 'App needs access to your camera.',
          buttonPositive: 'OK',
          buttonNegative: 'Cancel',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Camera permission granted');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  }

  useEffect(() => {
    requestCameraPermission();
  }, []);
  const device = useCameraDevice('back');
  const camera = useRef(null);
  if (device == null) return <ActivityIndicator />;
  const handletakePhoto = async () => {
    if (!(camera == null)) {
      const photo = await camera.current.takePhoto({
        flash: 'on',
      });
      setSelectedImage( 'file://' + photo.path);
    }
  };
  return !selectedImage ? (
    <View style={{flex: 1}}>
      <Camera
        ref={camera}
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        photo
      />
      <TouchableOpacity
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: '#00000089',
          position: 'absolute',
          bottom: 60,
          alignSelf: 'center',
          alignItems:"center",
          justifyContent:"center",
          borderRadius: 30,
          borderWidth: 3,
          borderColor: '#ffffff',
        }}
        onPress={() => {
          handletakePhoto();
        }}
      ><Text style={{fontSize:20}}>Çək</Text></TouchableOpacity>
    </View>
  ) : (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Seçiminiz</Text>
        {selectedImage && (
          <>
          <TouchableOpacity onPress={()=>{setSelectedImage(null)}}>
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
              <TouchableOpacity style={styles.buttonContainer} onPress={handleNextPress}>
                <View style={styles.buttonInnerContainer}>
                  <Text style={styles.buttonText}>Növbəti</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </>
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
export default DetectScreen;
