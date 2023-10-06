import React, { createContext, useState, useEffect } from 'react';

// creamos context 
export const CartContext = createContext();


const CartProvider = ({children}) => {
  // Estado del Cart 
  const [cart, setCart] = useState([]);
  // Estado del item Amount
  const [itemAmount, setItemAmount] = useState(0);

  // Estado total precio 
  const [total, setTotal] = useState(0);

 useEffect(() => {
   const total = cart.reduce((acum, currentItem) => {
    return acum + currentItem.price * currentItem.amount;
   },0);
   setTotal(total);
 }, [cart]);

  // actualiza item Amount
  useEffect(() => {
    if (cart) {
      const amount = cart.reduce((acumulador, currentItem) => {
        return acumulador + currentItem.amount;
      }, 0);
      setItemAmount(amount)
    }
  }, [cart])
  

  // Añade al Carrito
  const addToCart = (product, id) => {
    const newItem = {...product, amount: 1};
    
    // Comprobamos si existe ya el artiiculo en el carrito
    const cartItem = cart.find((item) => {
      return item.id === id;
    })
    // si existe el articulo en el carrito
    if(cartItem) {
      const newCart = [...cart].map((item) => {
        if(item.id === id) {
          return {...item, amount: cartItem.amount + 1}
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  // Elimina del Carrito
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    })
    setCart(newCart);
  };

  // limpia Cart 
  const clearCart = () => {
    setCart([]);
  };
  // IIncremwnto de la cantiidad
  const aumentoCantidad = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };
  // decremeento de la cantiidad
  const decrementoCantidad = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return {...item, amount: cartItem.amount - 1};
        } else {
          return item;
        };
      });
      setCart(newCart);
    }
     if (cartItem.amount < 2) {
       removeFromCart(id);
     }
  };

  return <CartContext.Provider value={{cart, addToCart, removeFromCart, clearCart, aumentoCantidad, decrementoCantidad, itemAmount, total, }}>{children}</CartContext.Provider>;
};

export default CartProvider;