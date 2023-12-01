import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export const LoginContextProvider = ({children}) => {
  //////////////silinecek
  const loadLoginStatus = async () => {
    try {
      const savedLoginStatus = await AsyncStorage.getItem('isLogin');
      if (savedLoginStatus !== null) {
        setIsLogin(savedLoginStatus === 'true');
      }
    } catch (error) {
      console.error('Login status loading error:', error);
    }
  };
  //////////////
  const [isLogin, setIsLogin] = useState(true);
  ////////silinecek
  useEffect(() => {
    loadLoginStatus();
  }, []);

  useEffect(() => {
    const saveLoginStatus = async () => {
      try {
        await AsyncStorage.setItem('isLogin', isLogin.toString());
      } catch (error) {
        console.error('Login status saving error:', error);
      }
    };
    saveLoginStatus();
  }, [isLogin]);
  /////////////////
  return (
    <LoginContext.Provider value={{isLogin, setIsLogin}}>
      {children}
    </LoginContext.Provider>
  );
};
