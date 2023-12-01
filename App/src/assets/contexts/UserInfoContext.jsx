import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const UserInfoContext = createContext();
export const useUserInfoContext = () => useContext(UserInfoContext);
export const UserInfoContextProvider = ({children}) => {
  const currentDate = new Date();
  const [userData, setUserData] = useState({
    name: '',
    surname: '',
    email: '',
    number: '',
    password: '',
    confirmpassword: '',
    birthDate: new Date(),
    // birthDate: '',
    gender: '',
    speciality: '',
    agreement: true,
  });
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const data = await AsyncStorage.getItem('userData');
        if (data !== null) {
          const parsedData = JSON.parse(data);
          if (parsedData.birthDate) {
            // birthDate'i tarih nesnesi olarak ayarlayın
            parsedData.birthDate = new Date(parsedData.birthDate);
          }
          setUserData(parsedData);
        }
      } catch (error) {
        console.error('User data loading error:', error);
      }
    };
    loadUserData();
  }, []);

  useEffect(() => {
    const saveUserData = async () => {
      try {
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
      } catch (error) {
        console.error('User data saving error:', error);
      }
    };
    saveUserData();
  }, [userData]);

  ////////////////
  return (
    <UserInfoContext.Provider value={{userData, setUserData}}>
      {children}
    </UserInfoContext.Provider>
  );
};
