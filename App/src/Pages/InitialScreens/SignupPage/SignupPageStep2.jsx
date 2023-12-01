import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import Toast from 'react-native-toast-message';
import DateTimePicker from '@react-native-community/datetimepicker';
import CalendarSvg from './img/calendar.svg';
import GoBackSvg from './img/goBack.svg';
import DownSvg from './img/down.svg';
import {styles} from './style2';
import {useUserInfoContext} from '../../../assets/contexts/UserInfoContext';
import { Image } from 'react-native-animatable';
const SignupPageStep2 = ({navigation}) => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const {userData, setUserData} = useUserInfoContext();

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'android' || 'ios');
    if (selectedDate) {
      setUserData(prevData => ({
        ...prevData,
        birthDate: selectedDate,
      }));
    }
    setShowDatePicker(false);
  };
  const countries = ["Frontend", "Backend", "Fullstack", "Mobile", "UI/UX", "QA", "Electonica", "Data Science" ]
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
          <GoBackSvg width={20} height={20} />
        </TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.createAccount}>Create a new account</Text>
          <View style={styles.client}>
            <Text style={styles.clientText}>Client</Text>
          </View>
          <View style={styles.inputArea}>
            <Text style={styles.writeDateBirth}>Select your birth date</Text>
            <TouchableHighlight
              underlayColor="transparent"
              onPress={() => {
                setShowDatePicker(true);
              }}>
              <View style={styles.input}>
                <TextInput
                  style={{color: '#014370'}}
                  placeholderTextColor="rgba(1,67,112,0.7)"
                  placeholder="Birth date"
                  value={
                    userData.birthDate
                      ? userData?.birthDate?.toLocaleDateString()
                      : ''
                  }
                  editable={false}
                />

                <CalendarSvg width={23} height={23} />
              </View>
            </TouchableHighlight>
            {showDatePicker && (
              <DateTimePicker
                testID="dateTimePicker"
                value={userData.birthDate}
                mode="date"
                is24Hour={true}
                display="default"
                onChange={handleDateChange}
              />
            )}
            <View style={styles.gender}>
              <TouchableHighlight
                onPress={() => {
                  setUserData(prevData => ({
                    ...prevData,
                    gender: 'Man',
                  }));
                }}
                underlayColor=""
                style={
                  userData.gender === 'Man'
                    ? styles.genderTypeSelected
                    : styles.genderTypeNotSelected
                }>
                <Text
                  style={
                    userData.gender === 'Man'
                      ? styles.genderTypeSelectedText
                      : styles.genderTypeNotSelectedText
                  }>
                  Man
                </Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => {
                  setUserData(prevData => ({
                    ...prevData,
                    gender: 'Woman',
                  }));
                }}
                underlayColor=""
                style={
                  userData.gender === 'Woman'
                    ? styles.genderTypeSelected
                    : styles.genderTypeNotSelected
                }>
                <Text
                  style={
                    userData.gender === 'Woman'
                      ? styles.genderTypeSelectedText
                      : styles.genderTypeNotSelectedText
                  }>
                  Woman
                </Text>
              </TouchableHighlight>
            </View>
              <View style={styles.speciality}>
                <Text style={styles.specialityText}>Speciality</Text>
                <SelectDropdown
                buttonStyle={{backgroundColor:"#014370", borderRadius:10}}
                buttonTextStyle={{color:"#fff"}}
                dropdownStyle={{backgroundColor:"#fff", color:"#014370"}}
                  data={countries}
                  defaultButtonText='Choose'
                  onSelect={(selectedItem, index) => {
                    setUserData(prevData =>({
                      ...prevData,
                      speciality: selectedItem
                    }))
                  }}
                  buttonTextAfterSelection={(selectedItem, index) => {
                   
                    return selectedItem;
                  }}
                  rowTextForSelection={(item, index) => {
                    
                    return item;
                  }}
                />
              </View>
            <View style={styles.agreement}>
              <CheckBox
                tintColors={{true: '#014370', false: '#014370'}}
                value={userData.agreement}
                onValueChange={() => {
                  setUserData(prevData => ({
                    ...prevData,
                    agreement: !prevData.agreement,
                  }));
                }}
              />
              <Text style={styles.agreementText}>Agreement</Text>
            </View>
          </View>
          <TouchableHighlight
            style={styles.nextButton}
            underlayColor="#074970"
            onPress={() => {
              if (
                userData.birthDate === '' ||
                userData.gender.trim() === '' ||
                userData.agreement === false
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Xahiş edirik bütün xanaları doldurasız',
                });
                return;
              } else if (
                userData.birthDate &&
                userData.birthDate > new Date()
              ) {
                Toast.show({
                  type: 'error',
                  text1: 'Xəta',
                  text2: 'Xahiş edirik doğum tarixinizi düzgün qeyd edin',
                });
                return;
              }
              Toast.show({
                type: 'success',
                text1: 'Qeydiyyatınız uğurla tamamlandı',
                text2: 'Giriş səhifəsinə yönləndirilirsiz...',
              });
              setTimeout(() => {
                navigation.navigate('LoginScreen');
              }, 2000);
            }}>
            <Text style={styles.buttonText}>Create</Text>
          </TouchableHighlight>
        </View>
      </View>
      <Toast />
    </ScrollView>
  );
};

export default SignupPageStep2;
