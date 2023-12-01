import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import React, {useState} from 'react';
import Footer from '../../../layouts/Footer/Footer';
import {styles} from './style';
import PPSvg from './img/pp.svg';
import ImagePicker from 'react-native-image-picker';
import {useUserInfoContext} from '../../../assets/contexts/UserInfoContext';
const ProfilePage = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const [profileImage, setProfileImage] = useState(null);
  const {userData, setUserData} = useUserInfoContext();
  const selectImage = () => {
    const options = {
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 2000,
      maxWidth: 2000,
    };

    // ImagePicker.launchImageLibrary(options, (response) => {
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('Image picker error: ', response.error);
    //   } else {
    //     let imageUri = response.uri || response.assets?.[0]?.uri;
    //     setSelectedImage(imageUri);
    //   }
    // });
  };
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#014370'}}>
      <View style={[styles.main, {height: screenHeight}]}>
        <ScrollView>
          <View style={styles.pp}>
            <TouchableHighlight
              underlayColor="#F1F0EC"
              onPress={selectImage}
              style={styles.ppImg}>
              {profileImage ? (
                <Image
                  source={profileImage}
                  style={{width: 200, height: 200, borderRadius: 100}}
                />
              ) : (
                <PPSvg />
              )}
            </TouchableHighlight>
            <Text style={styles.ppName}>
              {userData.name + ' ' + userData.surname}
            </Text>
          </View>
          <View style={styles.items}>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Ad</Text>
              <Text style={styles.itemName}>{userData.name}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Soyad</Text>
              <Text style={styles.itemName}>{userData.surname}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Ş.V Seriya nömrəsi</Text>
              <Text style={styles.itemName}>AA765423</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Ş.V FİN Kod</Text>
              <Text style={styles.itemName}>2KH8DF5</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Avtomobil Modeli</Text>
              <Text style={styles.itemName}>Hyundai Sonata (2021)</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Qeydiyyat Nişanı</Text>
              <Text style={styles.itemName}>🇦🇿10 - AA - 123</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Sığorta tarixi</Text>
              <Text style={styles.itemName}>21/02/2021</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Sığorta növü</Text>
              <Text style={styles.itemName}>KASKO</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Əlaqə nömrəsi</Text>
              <Text style={styles.itemName}>{'+994' + userData.number}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>E-mail</Text>
              <Text style={styles.itemName}>{userData.email}</Text>
            </View>
            <View style={styles.item}>
              <Text style={styles.itemHeader}>Doğum tarixi</Text>
              <Text style={styles.itemName}>
                {userData.birthDate?.toLocaleDateString()}
              </Text>
            </View>

            <View style={styles.item}>
              <Text style={styles.itemHeader}></Text>
              <Text style={styles.itemName}></Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <Footer value={5} />
    </ScrollView>
  );
};

export default ProfilePage;
