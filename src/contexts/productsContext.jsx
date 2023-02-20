import React, { createContext, useMemo, useCallback, useContext, useReducer } from 'react'
import PropTypes from 'prop-types'
import { productInitialValue, productReducer } from '../reducers/productReducer'
import { useErrorContext } from './errorContext';
import useApiRequest from '../hooks/useApiRequest';
import { useLoadingContext } from './loadingContext';

export const ProductContext = createContext();

export function ProductsProvider({children}) {

    const [ products, dispatch] = useReducer(productReducer, productInitialValue)
    const {dispatchErrors} = useErrorContext();
    const {dispatchLoading} = useLoadingContext();
    const apiRequest = useApiRequest(dispatch, dispatchLoading, dispatchErrors)

    const loadProducts = useCallback(async() => {
      const type = 'LOAD_PRODUCT';
      apiRequest({
        apiData: {
             method: 'get',
             url: '660/products',
        },
        type,
   })},[apiRequest]);
    
    const value = useMemo(() => ({
        loadProducts,
        products,
    }), [ loadProducts, products])

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}

ProductsProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export const useProducts = () => useContext(ProductContext)