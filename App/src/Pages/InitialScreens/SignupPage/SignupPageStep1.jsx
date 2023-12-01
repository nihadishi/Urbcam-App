import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './style1';
import {styled} from 'nativewind';
import Eyeopen from './img/eyeopn.svg';
import Eyeclose from './img/eyecls.svg';
import GoBackSvg from './img/goBack.svg';
import DownSvg from './img/down.svg';
import Toast from 'react-native-toast-message';
import { useUserInfoContext } from '../../../assets/contexts/UserInfoContext';
const StyledView = styled(View);
const StyledText = styled(Text);
const SignupPageStep1 = ({navigation}) => {
  const screenHeight = Dimensions.get('window').height;
  const [showPassword1, setshowPassword1] = useState(true);
  const [showPassword2, setshowPassword2] = useState(true);
  const {userData, setUserData} = useUserInfoContext();

  return (
    <>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{backgroundColor: '#F1F0EC'}}>
        <View style={[styles.main]}>
          <TouchableOpacity
            style={styles.goBack}
            onPress={() => {
              navigation.goBack();
            }}>
            <GoBackSvg width={20} height={20} />
          </TouchableOpacity>
          <View style={styles.container}>
            <StyledText style={styles.createAccount}>
              Create a new account
            </StyledText>
            <View style={styles.client}>
              <Text style={styles.clientText}>Client</Text>
            </View>
            <View style={styles.inputArea}>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370', width: '100%'}}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Name"
                  onChangeText={text => {
                    setUserData(prevData => ({
                      ...prevData,
                      name: text,
                    }));
                  }}
                  value={userData.name}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370', width: '100%'}}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Surname"
                  onChangeText={text => {
                    setUserData(prevData => ({
                      ...prevData,
                      surname: text,
                    }));
                  }}
                  value={userData.surname}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370', width: '100%'}}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="E-mail"
                  onChangeText={text => {
                    setUserData(prevData => ({
                      ...prevData,
                      email: text,
                    }));
                  }}
                  value={userData.email}
                />
                {!userData.email.includes("@") && userData.email.length>3? <Text style={{position:"absolute", right:15, backgroundColor:"#F1F0EC", color:"red",marginVertical:"auto"}}>@ ilə yazın</Text>:""}
              </View>
              <View style={styles.inputNumberArea}>
                <View style={styles.inputNumberCountry}>
                  <Text style={{color: 'rgba(1,67,112,0.7)'}}>+994</Text>
                  <DownSvg width={15} height={15} />
                </View>
                <View style={styles.inputNumberInput}>
                  <TextInput
                    style={{color: '#014370', width: '100%'}}
                    placeholder="Number"
                    keyboardType="numeric"
                    placeholderTextColor="rgba(1,67,112,0.7)"
                    value={userData.number}
                    onChangeText={text => {
                      let numericText = text.replace(/[^0-9]/g, '');
                      if (text[0] == '0') {
                        numericText = numericText.slice(1);
                      } else if (numericText.length > 9) {
                        numericText = numericText.slice(0, 9);
                      }

                      setUserData(prevData => ({
                        ...prevData,
                        number: numericText,
                      }));
                    }}
                  />
                </View>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370', width: '75%'}}
                  secureTextEntry={showPassword1}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Password"
                  onChangeText={text => {
                    setUserData(prevData => ({
                      ...prevData,
                      password: text,
                    }));
                  }}
                  
                />
                <TouchableHighlight
                  onPress={() => {
                    setshowPassword1(!showPassword1);
                  }}
                  underlayColor="transparent"
                  style={styles.inputpswd}>
                  {showPassword1 ? (
                    <Eyeopen width={23} height={23} />
                  ) : (
                    <Eyeclose width={23} height={23} />
                  )}
                </TouchableHighlight>
              </View>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370', width: '75%'}}
                  secureTextEntry={showPassword2}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Repeat passowrd"
                  onChangeText={text => {
                    setUserData(prevData => ({
                      ...prevData,
                      confirmpassword: text,
                    }));
                  }}
                  
                />
                <TouchableHighlight
                  onPress={() => {
                    setshowPassword2(!showPassword2);
                  }}
                  underlayColor="transparent"
                  style={styles.inputpswd}>
                  {showPassword2 ? (
                    <Eyeopen width={23} height={23} />
                  ) : (
                    <Eyeclose width={23} height={23} />
                  )}
                </TouchableHighlight>
              </View>
            </View>
            <TouchableHighlight
              style={styles.nextButton}
              underlayColor="#074970"
              onPress={() => {
                if (
                  userData.name.trim() === '' ||
                  userData.surname.trim() === '' ||
                  userData.email.trim() === '' ||
                  userData.number.trim() === '' ||
                  userData.password.trim() === '' ||
                  userData.confirmpassword.trim() === ''
                ) {
                  Toast.show({
                    type: 'error',
                    text1: 'Xəta',
                    text2: 'Please fill in all lines',
                  });
                  return;
                } else if (userData.number.length < 9) {
                  Toast.show({
                    type: 'error',
                    text1: 'Xəta',
                    text2: 'Please enter number correctly',
                  });
                  return;
                } else if (userData.password.length < 6) {
                  Toast.show({
                    type: 'error',
                    text1: 'Xəta',
                    text2: 'Password must have minimum 6 characters',
                  });
                  return;
                } else if (
                  !(userData.password === userData.confirmpassword)
                ) {
                  Toast.show({
                    type: 'error',
                    text1: 'Xəta',
                    text2: "Password doesn't match your repeat password",
                  });
                  return;
                }

                navigation.navigate('Signup2Screen');
              }}>
              <Text style={styles.buttonText}>Next</Text>
            </TouchableHighlight>
            <View style={styles.haveAnAccount}>
              <View style={styles.goToLogin}>
                <Text style={{color: '#014370', fontSize: 16}}>
                  Already have an account?
                </Text>
                <Text
                  style={{color: '#014370', fontWeight: '700', fontSize: 18}}
                  onPress={() => {
                    navigation.navigate('LoginScreen');
                  }}>
                  Log in
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <Toast style={styles.toast} />
    </>
  );
};

export default SignupPageStep1;
