import React, { useCallback, useEffect } from 'react'
import { useProducts } from '../../contexts/productsContext';
import { useCartContext } from '../../contexts/cartContext';
import Product from '../../components/Product';
import { useErrorContext } from '../../contexts/errorContext';
import { useLoadingContext } from '../../contexts/loadingContext';
import Loading from '../../components/Loading';
import ErrorDisplay from '../../components/ErrorDisplay';

function Home() {

  const {loadProducts, productState: { products }} = useProducts();
  const { loadCart } = useCartContext();
  const { errors } = useErrorContext();
  const { loading } = useLoadingContext();


  const loadData = useCallback(async() => {
      await Promise.all([ loadProducts(),loadCart()])
    },[ loadProducts, loadCart ])
  
 
  useEffect(() => {
    loadData();
  }, [loadData]);

  console.log(errors);
  console.log(loading);

  if (loading.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')) {
    return <Loading/>
  }

  if (errors.some(x => x.action === 'LOAD_PRODUCTS' || x.action === 'LOAD_CART')) {
    return <div>
      <ErrorDisplay/>
    </div>
  }

  return (
    <div>
      {products.map(product => (
          <Product key={product.id} product={product}/>
        ) 
      )}
    </div>
  )
}

export default Home