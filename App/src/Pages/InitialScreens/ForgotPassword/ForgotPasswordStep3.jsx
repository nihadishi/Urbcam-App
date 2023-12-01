import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import GoBackSvg from "./img/goBack.svg";
import {styles} from './style3';
import Toast from 'react-native-toast-message';
const ForgotPasswordStep3 = ({navigation}) => {
  const [forgotInputDatas, setForgotInputDatas] = useState({
    password: " ",
    confirmpassword: " ",
  });
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor: '#F1F0EC'}}>
      <View style={styles.main}>
        <TouchableOpacity
          style={styles.goBack}
          onPress={() => {
            navigation.goBack();
          }}>
          <GoBackSvg width={20} height={20}/>
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.repairPswd}>Şifrənin bərpası</Text>
          <Text style={styles.writePswd}>Yeni şifrənizi daxil edin</Text>
          <TextInput
            style={styles.pswdInput}
            placeholder="Yeni şifrə"
            placeholderTextColor="rgba(1,67,112,0.7)"
            secureTextEntry={true}
            onChangeText={text => {
              setForgotInputDatas(prevData => ({
                ...prevData,
                password: text,
              }));
            }}
          />
          <TextInput
            style={styles.pswdInput}
            placeholder="Yeni şifrənin təkrarı"
            placeholderTextColor="rgba(1,67,112,0.7)"
            secureTextEntry={true}
            onChangeText={text => {
              setForgotInputDatas(prevData => ({
                ...prevData,
                confirmpassword: text,
              }));
            }}
          />
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor="#074970"
            onPress={() => {
              if (
                forgotInputDatas.password.trim() === '' ||
                forgotInputDatas.confirmpassword.trim() === ''
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Xahiş edirik bütün xanaları doldurasız',
                });
                return;
              }
              else if (forgotInputDatas.password.length < 6) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Şifrə minimum 6 simvoldan ibarət olmalıdır',
                });
                return;
              } 
              else if (
                !(
                  forgotInputDatas.password === forgotInputDatas.confirmpassword
                )
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Şifrənin təkrarı ilə şifrə eyni deyil',
                });
                return;
              }
              Toast.show({
                type: 'success',
                text1: 'Şifrəniz uğurla dəyişdirildi',
                text2: 'Giriş səhifəsinə yönləndirilirsiz...',
              });
              setTimeout(() => {
                navigation.navigate('LoginScreen');
              }, 2000);
            }}>
            <Text style={styles.buttonText}>Şifrəni dəyiş</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default ForgotPasswordStep3;
