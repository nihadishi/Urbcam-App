import Routes from './navigation/Routes';
import {MenuNotificationContextProvider} from './assets/contexts/MenuNotificationContext';
import {LoginContextProvider} from './assets/contexts/LoginContext';
import {UserInfoContextProvider} from './assets/contexts/UserInfoContext';
import { useEffect, useState } from 'react';
import StartScreen from './Pages/StartScreen/StartScreen';

function Main() {
  const [letsGo, setLetsGo] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setLetsGo(true);
    }, 3000);
  }, [])
  
  return (
    letsGo?<><UserInfoContextProvider>
    <LoginContextProvider>
      <MenuNotificationContextProvider>
        <Routes />
      </MenuNotificationContextProvider>
    </LoginContextProvider>
  </UserInfoContextProvider></>:<StartScreen/>
  );
}

export default Main;
