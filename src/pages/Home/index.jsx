import React, { useCallback, useEffect } from 'react'
import { useProducts } from '../../contexts/productsContext';
import { useCartContext } from '../../contexts/cartContext';
import Product from '../../components/Product';
import { useLoadingContext } from '../../contexts/loadingContext';
import Loading from '../../components/Loading';

function Home() {

  const {loadProducts, products} = useProducts();
  const { loadCart } = useCartContext();
  const { loading } = useLoadingContext();


  const loadData = useCallback(async() => {
      await Promise.all([ loadProducts(),loadCart()])
    },[ loadProducts, loadCart ])
  
 
  useEffect(() => {
    loadData();
  }, [loadData]);
  
  if (loading.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')) {
    return <Loading/>
  }

  return (
    <div>
      {products.map(product => {
        const isLoading = loading.some(x => x.loadingId === product.id);
        return (
          <Product key={product.id} product={product} isLoading={isLoading} />
        );
      })}
    </div>
  )
}

export default Home