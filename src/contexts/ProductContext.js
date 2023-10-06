import React, { createContext, useState, useEffect } from "react";

// Creamos Context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  // Estado de los Productos
  const [products, setProducts] = useState([]);

  // cargamos los productos
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products?limit=20');
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return <ProductContext.Provider value={{products}}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
