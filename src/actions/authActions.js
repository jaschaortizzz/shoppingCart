import axiosInstance from "../utils/axiosInstance";

export const loginAction = (values, actions) => async (dispatch)=> {
    try {
        dispatch({ type: 'LOGIN_REQUEST', meta: {loading: -1} })
        const res = await axiosInstance.post('login', values);
        localStorage.setItem('token', JSON.stringify(res))
        actions.resetForm();
        dispatch({ type: 'LOGIN_SUCCESS', payload: res, meta: {loading: -1} })
    } catch (error) {
        actions.setErrors({ serverError: error.message })
        dispatch({ 
            type: 'LOGIN_FAIL',
            payload: {
                message: error.message
            },
            meta: {loading: -1} })
    }
}

export const registerAction = (values, actions) => async (dispatch)=> {
    try {
        dispatch({ type: 'REGISTER_REQUEST', meta: {loading: -1} })
        const {confimPassword, ...rest} = values;
        const res = await axiosInstance.post('register', rest);
        localStorage.setItem('token', JSON.stringify(res))
        dispatch({ type: 'REGISTER_SUCCESS', payload: res, meta: {loading: -1} })
    } catch (error) {
        actions.setErrors({ serverError: error.message })
        dispatch({ 
            type: 'REGISTER_FAIL',
            payload: {
                message: error.message
            },
            meta: {loading: -1} })
    }
}

export const logoutAction = () => {
    localStorage.clear()
}