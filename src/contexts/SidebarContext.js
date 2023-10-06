import React, { useState, createContext } from 'react';

// creamos el Contex 
export const SidebarContext = createContext();

const SidebarProvider = ({children}) => {
  // Sidebar estado
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return <SidebarContext.Provider value={{ isOpen, setIsOpen, handleClose }}>
  {children}
  </SidebarContext.Provider>;
};

export default SidebarProvider;
