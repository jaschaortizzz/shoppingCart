export const productInitialValue = [];

export const productReducer = (state, { type, payload }) => {
    switch (type) {
         case 'LOAD_PRODUCT_SUCCESS':
              return payload

         default:
              return state
    }
};