import React, { useContext } from "react";
// importamos LInk
import { Link } from "react-router-dom";

// importanos los Iconoa
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";

// importamos Componentes
import CartItem from "../components/CartItem";

// impotamos siddebar context
import { SidebarContext } from "../contexts/SidebarContext";

// Importamos Cart Context
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, itemAmount } = useContext(CartContext);

  return (
    <div
      className={`${isOpen ? " right-0" : "-right-full"} 
     w-full bg-white fixed top-0 h-full shadow-2xl md:max-w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[35px]`}
    >
      <div className="flex justify-between items-center py-6 border-b transition duration-300">
        <div className="uppercase text-sm font-semibold">
          Shopping bag({itemAmount})
        </div>
        {/* icon */}
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <IoMdArrowForward className="text-2xl" />
        </div>
      </div>
      <div className="flex flex-col gap-y-2 max-h-[60vh] overflow-y-auto overflow-x-hidden border-b sm:pr-5">
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="flex flex-col gap-y-3 pb-4 mt-4">
        <div className="flex w-full justify-between items-center">
          {/* total */}
          <div className="uppercase font-semibold">
            <span className="mr-2">Total:</span>
            {parseFloat(total).toFixed(2)} €
          </div>
          {/* Limpiar Cart Icon */}
          <div
            onClick={clearCart}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>
        <Link
          to={"/"}
          className="bg-gray-200 flex p-3 justify-center items-center text-primary w-full font-medium"
        >
          View Cart
        </Link>
        <Link
          to={"/"}
          className="bg-primary flex p-3 justify-center items-center text-white w-full font-medium"
        >
          CheckOut
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
