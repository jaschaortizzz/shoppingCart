export const productInitialValue = [];

export default (state = productInitialValue, { type, payload }) => {
     switch (type) {
         case 'LOAD_PRODUCTS_SUCCESS':
              return payload

         default:
              return state
    }
};