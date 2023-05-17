import React from 'react'
import '../../style.css'
import PropTypes from 'prop-types'
import logo from '../../../public/images/space-logo.jpg'
import { registerFields, registerInitialValues } from './registerFields'
import CustomForm from '../../components/CustomForm'

function Register({ register }) {


  return (
    <div>
    <div className="flex flex-wrap min-h-screen w-full content-center justify-center bg-gray-200 py-10">
        <div className="flex shadow-md w-7/12">
            <div className="flex flex-wrap content-center justify-center rounded-l-md" >
                    <img alt="w" className="w-full h-full object-cover rounded-l-md" src={logo}/>
            </div>
            <div className="p-10 flex flex-wrap content-center justify-center rounded-r-md bg-white">
                    <div className="w-72">
                    <h1 className="text-xl font-semibold">Register</h1>
                    <small className="text-gray-400">Welcome to Shoe Planet 4106</small>
                    <CustomForm
                            initialValues={registerInitialValues}
                            onSubmit={register}
                            fields={registerFields}
                       />
                    <div className="text-center">
                    <span className="text-xs text-gray-400 font-semibold">Already have an account?</span>
                    <a href="/auth" className="text-primary-100 text-xs font-semibold]">Sign in</a>
                    </div>
                </div>
            </div>

        </div>
    </div></div>
  )
}

Register.propTypes = {
    register: PropTypes.func.isRequired
  }

export default Register