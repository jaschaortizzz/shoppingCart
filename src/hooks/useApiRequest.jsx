import { useCallback } from "react";
import axiosInstance from "../utils/axiosInstance";

const useApiRequest = (dispatch, dispatchLoading, dispatchErrors) => {
    const apiRequest = useCallback( 
    async ( {apiData, type} ) => {
    try {
         dispatchLoading({ type: `${type}_REQUEST`})
         dispatchErrors({ type: `${type}_REQUEST` })
         const res = await axiosInstance(apiData)
         dispatch({ 
            type: `${type}_SUCCESS`,
            payload: 
                apiData.type === 'delete' ? apiData.url.split("/").at(-1) : res,
        });
        dispatchLoading({
            type: `${type}_SUCCESS`,
            payload: {},
        })
       } catch (err) {
        dispatchLoading({
            type: `${type}_FAIL`,
            payload: {
                message: err.message
            },
        })
        dispatchErrors({type: `${type}_FAIL`, payload: {message: err.message}})
        
       }
     },[dispatch, dispatchLoading, dispatchErrors]);
     return apiRequest
  }

  export default useApiRequest;