import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Header from '../components/Header';
import { useAuthContext } from '../contexts/authContext'
import { CartProvider } from '../contexts/cartContext';
import { ProductsProvider } from '../contexts/productsContext';


function MainLayout() {

  const { user } = useAuthContext();

  if(!user){
    return <Navigate to="/auth" replace/>
  }

  return (
      <ProductsProvider>
        <CartProvider>
        <Header/>
        <Outlet/>
        </CartProvider>
      </ProductsProvider>
  )
}

export default MainLayout