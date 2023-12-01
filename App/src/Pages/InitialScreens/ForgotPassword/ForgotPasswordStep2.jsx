import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import GoBackSvg from "./img/goBack.svg";
import {styles} from './style2';
import Toast from 'react-native-toast-message';
const ForgotPasswordStep2 = ({navigation}) => {
  const input1Ref = useRef(null);
  const input2Ref = useRef(null);
  const input3Ref = useRef(null);
  const input4Ref = useRef(null);
  const [forgotInputDatas, setForgotInputDatas] = useState({
      otpfirst: "",
      otpsecond: "",
      otpthird: "",
      otpfourth: "",
  })
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else {
        if (minutes > 0) {
          setMinutes(minutes - 1);
          setSeconds(59);
        } else {
          clearInterval(timer);
        }
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [seconds, minutes]);

  const handleTextChange = (text, inputRef) => {
    if (text.trim().length === 1 && inputRef.current) {
      inputRef.current.focus();
    }
  };

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
          <Text style={styles.writeNumber}>
            Telefonunuza gələn kodu qeyd edin
          </Text>
          <View style={styles.numberArea}>
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input1Ref}
              value={forgotInputDatas.otpfirst}
              onChangeText={text => {handleTextChange(text, input1Ref), setForgotInputDatas(prevData=>({
                ...prevData,
                otpfirst: text,
              }))
              if (text.trim().length === 1) {
                input2Ref.current.focus();
              }
              
            }}
            />
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input2Ref}
              value={forgotInputDatas.otpsecond}
              onChangeText={text => {handleTextChange(text, input2Ref), setForgotInputDatas(prevData=>({
                ...prevData,
                otpsecond: text,
              }))
              if (text.trim().length === 1) {
                input3Ref.current.focus();
              }
              else if (text.trim().length === 0) {
                input1Ref.current.focus();
              }
            }}
            />
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input3Ref}
              value={forgotInputDatas.otpthird}
              onChangeText={text => {handleTextChange(text, input3Ref), setForgotInputDatas(prevData=>({
                ...prevData,
                otpthird: text,
              }))
              if (text.trim().length === 1) {
                input4Ref.current.focus();
              } else if (text.trim().length === 0) {
                input2Ref.current.focus();
              }
            }}
            />
            <TextInput
              style={styles.numberInput}
              keyboardType="numeric"
              maxLength={1}
              ref={input4Ref}
              value={forgotInputDatas.otpfourth}
              onChangeText={text => {handleTextChange(text, input4Ref), setForgotInputDatas(prevData=>({
                ...prevData,
                otpfourth: text,
              }))
              if (text.trim().length === 0) {
                input3Ref.current.focus();
              }}}
            />
          </View>
          <View style={styles.tryAgain}>
            <TouchableHighlight
              underlayColor="#transparent"
              onPress={() => {
                if (seconds === 0 && minutes === 0) {
                  setMinutes(1);
                }
              }}>
              <Text style={minutes== 0 && seconds == 0 ? {color: '#056EB5', fontWeight:"800"}:{color: '#056EB5', fontWeight:"400"}}>Yenidən göndər</Text>
            </TouchableHighlight>
            <Text style={{color: '#056EB5'}}>
              {minutes < 10 ? minutes == 0 && seconds == 0 ? '': `0${minutes}:` : minutes}
              {seconds < 10 ? minutes == 0 && seconds == 0? '': `0${seconds}` : seconds}
            </Text>
          </View>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor="#074970"
            onPress={() => {
              if(forgotInputDatas.otpfirst == "" || forgotInputDatas.otpsecond == "" || forgotInputDatas.otpthird == "" || forgotInputDatas.otpfourth == ""){
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Kodu doğru daxil edin',
                });
                return;
              }
              navigation.navigate('ForgotPassword3Screen');
            }}>
            <Text style={styles.buttonText}>Növbəti</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default ForgotPasswordStep2;
