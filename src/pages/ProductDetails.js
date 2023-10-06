import React, {useContext} from 'react'

// importamos UseParams 
import { useParams } from 'react-router-dom';

// importamos CartContext 
import { CartContext } from '../contexts/CartContext';

// importamos Product Context 
import { ProductContext } from '../contexts/ProductContext';

const ProductDetails = () => {
  // Cogemos el id del producto de la URL
  const {id} = useParams()
  const {products} = useContext(ProductContext);
  const {addToCart} = useContext(CartContext);

  // Cogemos solo un producto basado el ID
  const product = products.find((item) => {
    return item.id === parseInt(id);
  });

  // Si el producto no se enccuentra
  if (!product) {
    return (
      <section className='h-screen flex justify-center items-center'>
        <img src="../../public/loader.svg" alt="Loading..." />
      </section>
    )
  }
  // destructuramos el Producto 
  const { title, price, description, image } = product;;

  return (
    <section className="pt-32 pb-12 lg:py-32 flex items-center">
      <div className="container mx-auto">
        {/* imagen & texto as wrapper */}
        <div className='flex flex-col lg:flex-row items-center'>
          {/* imagen */}
          <div className='flex flex-1 justify-center items-center mb-8 lg:mb-0'>
            <img className='max-h-[35vh] lg:max-h-[70vh] ' src={image} alt="" />
          </div>
          {/* text */}
          <div className='flex-1 text-center lg:text-left'>
            <h1 className='text-[25px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0'>{title}</h1>
            <div className="text-xl text-red-500 font-medium mb-6">{price} €</div>
            <p className='mb-8 md:text-base'>{description}</p>
            <button onClick={() => addToCart(product, product.id)} className='bg-primary py-4 px-8 text-white hover:bg-red-200 hover:text-red-500 hover:font-medium'>Add To Cart</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails
