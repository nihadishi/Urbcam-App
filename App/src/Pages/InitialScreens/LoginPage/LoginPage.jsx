import React, {useContext, useState} from 'react';
import {
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Eyeopen from '../SignupPage/img/eyeopn.svg';
import Eyeclose from '../SignupPage/img/eyecls.svg';
import GoBackSvg from './img/goBack.svg';
import {styles} from './style';
import Toast from 'react-native-toast-message';
import {useLoginContext} from '../../../assets/contexts/LoginContext';
import {useUserInfoContext} from '../../../assets/contexts/UserInfoContext';

function LoginPage({navigation}) {
  const windowHeight = Dimensions.get('window').height;
  const [showPassword, setshowPassword] = useState(true);
  const {setIsLogin} = useLoginContext();
  const {userData, setUserData} = useUserInfoContext();
  const [inputDatas, setinputDatas] = useState({
    email: userData?.email ? userData.email : '',
    password: '',
  });
  const handleEmailChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      email: text,
    }));
  };
  const handlePaswdChange = text => {
    setinputDatas(prevData => ({
      ...prevData,
      password: text,
    }));
  };
  const handleLoginClick = () => {
    if (
      !(
        inputDatas.email.includes('@') &&
        inputDatas.email.includes('.') &&
        inputDatas.email.length > 3
      )
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Write your email correctly',
      });
    } else if (!(userData.email == inputDatas.email) || userData.email == '') {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Please register ',
      });
    } else if (
      inputDatas.password < 6 ||
      !(userData.password == inputDatas.password)
    ) {
      Toast.show({
        type: 'error',
        text1: 'Error',
        text2: 'Password or email is wrong',
      });
    } else {
      Toast.show({
        type: 'success',
        text1: 'Account created successfully',
        text2: 'You redirected to Home Screen',
      });
      setTimeout(() => {
        setIsLogin(true);
      }, 1000);
    }
  };
  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: '#F1F0EC'}}>
        <View style={styles.main}>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => {
              navigation.goBack();
            }}>
            <GoBackSvg width={20} height={20} />
          </TouchableOpacity>
          <View style={styles.container}>
            <View style={styles.text}>
              <Text style={styles.textName}>Pasha Sigorta</Text>
            </View>
            <View style={styles.inputs}>
              <View style={styles.email}>
                <TextInput
                  style={{color: '#014370', width: '75%'}}
                  placeholder="E-poçt ünvanı"
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  value={inputDatas.email}
                  onChangeText={handleEmailChange}
                />
                {!inputDatas.email.includes('@') &&
                inputDatas.email.length > 3 ? (
                  <Text
                    style={{
                      backgroundColor: '#F1F0EC',
                      color: 'red',
                      textAlign: 'center',
                      alignItems: 'center',
                    }}>
                    @ ilə yazın
                  </Text>
                ) : (
                  ''
                )}
              </View>
              <View style={styles.pswd}>
                <TextInput
                  style={{color: '#014370', width: '75%'}}
                  placeholder="Şifrə"
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  value={inputDatas.password}
                  onChangeText={handlePaswdChange}
                  secureTextEntry={showPassword}
                />
                <TouchableHighlight
                  onPress={() => {
                    setshowPassword(!showPassword);
                  }}
                  underlayColor="transparent"
                  style={styles.inputpswd}>
                  {showPassword ? (
                    <Eyeopen width={23} height={23} />
                  ) : (
                    <Eyeclose width={23} height={23} />
                  )}
                </TouchableHighlight>
              </View>
              <View style={styles.forgot}>
                <Text
                  style={{color: '#014370', textAlign: 'right'}}
                  onPress={() => {
                    navigation.navigate('ForgotPassword1Screen');
                  }}>
                  Şifrəni unutmusan?
                </Text>
              </View>
              <TouchableHighlight
                onPress={handleLoginClick}
                style={styles.loginButton}>
                <Text style={styles.buttonText}>Daxil ol</Text>
              </TouchableHighlight>
              <Text
                style={{color: '#014370'}}
                onPress={() => {
                  navigation.navigate('Signup1Screen');
                }}>
                Hesabın yoxdur?{' '}
                <Text style={{fontWeight: 700}}>Qeydiyyat</Text>
              </Text>
            </View>
            <View style={styles.needy}>
              <Image
                style={styles.needyImage}
                source={require('./img/logo_main.png')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <Toast style={styles.toast} />
    </>
  );
}

export default LoginPage;
