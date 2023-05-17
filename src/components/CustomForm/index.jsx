import React from 'react'
import { Formik, Field, Form } from 'formik'

function CustomForm({ fields,children, btnText ,...props }) {
  return (
    <Formik
        {...props}
    >
        {({ errors }) =>(
            <Form className="mt-4">
                {errors.serverError && <p className='text-center font-semibold text-red-500 text-sm'>{errors.serverError}</p>}
                {fields.map(item => 
                    <Field
                        key={item.name}
                        {...item}
                    />
                )}
                {children}
                <div className="mb-3">
                    <button type="submit" className="mb-1.5 block w-full text-center text-white bg-primary-100 hover:bg-primary-200 px-2 py-1.5 rounded-md">Sign in</button>
                    <button type="button" className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                        <img alt="i" className="w-5 mr-2" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"/>
                        Sign in with Google
                    </button>
                </div>
            </Form>
        )}
        </Formik>
  )
}

export default CustomForm