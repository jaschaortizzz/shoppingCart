import React, { useCallback, useEffect } from 'react'
import Product from '../../components/Product';
import Loading from '../../components/Loading';

function Home({ loadProducts, products, loadCart, loading }) {

  const loadData = useCallback(async() => {
      await Promise.all([ loadProducts(),loadCart()])
    },[ loadProducts, loadCart ])
  
 
  useEffect(() => {
    loadData();
  }, [loadData]);
  
  return (
    <div>
      {products.map(product => (
          <Product key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Home