import React, { useContext } from 'react';

// importamos Link 
import { Link } from 'react-router-dom';
// Importamos Icones
import { IoMdAdd, IoMdClose, IoMdRemove } from 'react-icons/io'

// importamos Cart Context 
import { CartContext } from '../contexts/CartContext';

const CartItem = ({item}) => {
  const { removeFromCart, aumentoCantidad, decrementoCantidad } = useContext(CartContext)

  // destruccturamos item 
  const {id, title, image, price,amount } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[100px] max-md:h-32 flex items-center gap-x-4">
        {/* imagen */}
        <Link to={`/prodct/${id}`}>
          <img className="max-w-[80px] " src={image} alt="imagen producto" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove Icon */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              to={`/Product/${id}`}
              className="text-sm uppercase font-medium max-w-[230px] text-primary hover:underline"
            >
              {title}
            </Link>
            {/* remove Icon  */}
            <div onClick={() => removeFromCart(id)} className="text-xl cursor-pointer">
              <IoMdClose className="text-gray-500 hover:text-red-500 transition" />
            </div>
          </div>
          <div className="flex gap-x-2 h-[36px] text-sm">
            {/* Qty */}
            <div className="flex flex-1 max-w-[100px] items-center border text-primary font-medium h-full">
              {/* minus icon */}
              <div onClick={() => decrementoCantidad(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                <IoMdRemove />
              </div>
              {/* amount */}
              <div className="h-full flex justify-center items-center px-2 bg-red-400 text-white">
                {amount}
              </div>
              <div onClick={() => aumentoCantidad(id)} className="flex-1 flex justify-center items-center cursor-pointer">
                {/* Plus icon */}
                <IoMdAdd />
              </div>
            </div>
            {/* Item Price */}
            <div className='flex-1 flex items-center justify-around'>{price} €</div>
            {/* Precio Final */}
            {/* precio final con 2 decimales */}
            <div className='flex-1 flex justify-end items-center text-primary font-medium'>{`${parseFloat( price * amount).toFixed(2)} €`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
