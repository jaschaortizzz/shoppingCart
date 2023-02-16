export const productInitialValue = {
    loading: false,
    products: [],
    error: '',
  };

export const productReducer = (state, { type, payload }) => {
    switch (type) {
         case 'LOAD_PRODUCT_REQUEST':
              return {...state, loading: true}

         case 'LOAD_PRODUCT_SUCCESS':
              return {...state, loading: false, products: payload.data}

         case 'LOAD_PRODUCT_FAIL':
              return {...state, loading: false, error: payload.message}

         default:
              return state
    }
};