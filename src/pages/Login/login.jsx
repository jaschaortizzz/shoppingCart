import React from 'react'
import '../../style.css'
import PropTypes from 'prop-types'
import logo from '../../../public/images/space-logo.jpg'
import { loginFields, loginInitialValues } from './loginFields'
import CustomForm from '../../components/CustomForm'


function Login({ login }) {

  return (
    <div>
        <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
            <div className="flex shadow-md w-3/6">
                <div className="p-10 flex flex-wrap content-center justify-center rounded-l-md bg-white">
                        <div className="w-72">
                        <h1 className="text-xl font-semibold">Welcome back</h1>
                        <small className="text-gray-400">Welcome back! Please enter your details</small>
                       <CustomForm
                            initialValues={loginInitialValues}
                            onSubmit={login}
                            fields={loginFields}
                       >
                        <div className="mb-3 flex flex-wrap content-center">
                            <a href="/" className="text-xs font-semibold text-primary-100">Forgot password?</a>
                        </div>
                        </CustomForm>
                        <div className="text-center">
                        <span className="text-xs text-gray-400 font-semibold">Dont have account?</span>
                        <a href="/auth/register" className="text-primary-100 text-xs font-semibold]"> Sign up</a>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap content-center justify-center rounded-r-md" >
                        <img alt="w" className="w-full h-full object-cover rounded-r-md" src={logo}/>
                </div>
            </div>
        </div>
    </div>
  )
}

Login.propTypes = {
  login: PropTypes.func.isRequired
}

export default Login