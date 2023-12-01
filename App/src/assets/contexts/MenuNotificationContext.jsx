import React, { createContext, useContext, useState } from 'react';

const MenuNotificationContext = createContext();

export const useMenuNotificationContext = () => useContext(MenuNotificationContext);

export const MenuNotificationContextProvider = ({ children }) => {
  const [menuIsOpen, setmenuIsOpen] = useState(false);
  const [notificationIsOpen, setnotificationIsOpen] = useState(false);


  return (
    <MenuNotificationContext.Provider value={{ menuIsOpen, setmenuIsOpen, notificationIsOpen,setnotificationIsOpen }}>
      {children}
    </MenuNotificationContext.Provider>
  );
};
