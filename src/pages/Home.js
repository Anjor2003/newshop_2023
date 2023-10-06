import React, { useContext } from 'react';

// Importamos ProductConext 
import { ProductContext } from '../contexts/ProductContext';
import Product from '../components/Product';
import Hero from '../components/Hero';

const Home = () => {
  // cargamos los productos
  const { products } = useContext(ProductContext);

  // Cogemos solo aquello productos de Hombre & Mujeres
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "women's clothing" ||
      item.category === "men's clothing" ||
      item.category === "jewelery"
    );
  });

  return <div>
  <Hero />
    <section className='py-16'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-7 max-w-sm mx-auto md:max-w-none md:mx-0'>
           {filteredProducts.map(product => {
            return <Product product={product} key={product.id} />
           })}
        </div>
      </div>
    </section>
  </div>
};

export default Home;
