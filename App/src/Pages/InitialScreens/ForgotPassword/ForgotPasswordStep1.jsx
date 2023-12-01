import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import GoBackSvg from "./img/goBack.svg";
import DownSvg from "./img/down.svg";
import {styles} from './style1';
import Toast from 'react-native-toast-message';
const ForgotPasswordStep1 = ({navigation}) => {
  const [forgotInputDatas, setForgotInputDatas] = useState({
    number:""
  })
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
          <Text style={styles.writeNumber}>Telefon nömrənizi qeyd edin</Text>
          <View style={styles.numberArea}>
            <View style={styles.numberCountry}>
              <Text style={{color: 'rgba(1,67,112,0.7)'}}>+994</Text>
              <DownSvg width={18} height={18}/>
            </View>
            <View style={styles.numberInput}>
              <TextInput
              style={{color:"#014370"}}
                placeholder="Mobil nömrə"
                keyboardType="numeric"
                placeholderTextColor="rgba(1,67,112,0.7)"
                value={forgotInputDatas.number}
                  onChangeText={text => {
                    let numericText = text.replace(/[^0-9]/g, '');
                    if (text[0] == '0') {
                      numericText = numericText.slice(1);
                    } else if (numericText.length > 9) {
                      numericText = numericText.slice(0, 9);
                    }

                    setForgotInputDatas(prevData => ({
                      ...prevData,
                      number: numericText,
                    }));
                  }}
              />
            </View>
          </View>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor="#074970"
            onPress={() => {
              if (forgotInputDatas.number.length < 9) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Əlaqə nömrənizi doğru daxil edin',
                });
                return;
              }
              navigation.navigate('ForgotPassword2Screen');
            }}>
            <Text style={styles.buttonText}>Növbəti</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Toast/>
    </ScrollView>
  );
};

export default ForgotPasswordStep1;
