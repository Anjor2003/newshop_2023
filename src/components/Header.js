import React, { useContext, useEffect, useState } from "react";

// sidebar Context
import { SidebarContext } from "../contexts/SidebarContext";

// cart  Context
import { CartContext } from "../contexts/CartContext";

// Importamos Icons
import { BsBag } from "react-icons/bs";
// Importo Imagenes
import Logo from '../img/logo.svg'


const Header = () => {
  // Estado del Header
  const { isOPen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  return (
    <header className="bg-white py-3 shadow-md fixed w-full z-10 transition-all">
      {/* logo */}
      <div className="container mx-auto flex items-center justify-between h-full">
        <div>
        <a href="/" >
         <img className="w-[40px]" src={Logo} alt="" />
        </a>
        </div>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOPen)}
          className="cursor-pointer flex relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center">
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
