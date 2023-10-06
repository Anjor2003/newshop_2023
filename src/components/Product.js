import React,{ useContext } from 'react';
// Importamos Link
import { Link } from 'react-router-dom';
// Importamos Icons 
import {BsPlus, BsEyeFill } from 'react-icons/bs';
// importamos cart context 
import { CartContext } from '../contexts/CartContext';

const Product = ({product}) => {
  const { addToCart } = useContext(CartContext);
  
  // Destructuramos los Productos 
  const { id, image, category, title, price } = product;

  return (
    <div>
      <div className="border boderr-[@e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition shadow-2xl">
        <div className="w-full h-full flex justify-center items-center">
          {/* image */}
          <div className="w-[200px] mx-auto flex justify-center items-center object-contain">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-300"
              src={image}
              alt="imagen producto"
            />
          </div>
        </div>
        {/* buttons */}
        <div className="absolute top-6 -right-11 group-hover:right-2 p-0.5 flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <button onClick={() => addToCart(product, id)}>
            <div className="flex justify-center items-center text-white w-12 h-12 bg-red-500">
              <BsPlus className="text-3xl" />
            </div>
          </button>
          <Link
            to={`/product/${id}`}
            className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
          >
            <BsEyeFill />
          </Link>
        </div>
      </div>
      {/* categoria, titulo y precio */}
      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className="font-semibold">{price} €</div>
      </div>
    </div>
  );
}

export default Product;
