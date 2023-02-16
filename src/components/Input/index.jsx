import React from 'react'


function Input({
    field,
    form: { touched, errors },
    meta,
    className,
    ...props
  }) {

  return (
    <div className="mb-3">
        <label htmlFor={props.id} className="mb-2 block text-xs font-semibold">{props.label}</label>
        <input 
            {...field}
            {...props}
            id={props.id}
            type={props.id}
            autoComplete={props.id}
            className="block w-full rounded-md border font-normal border-gray-300 focus:border-primary-100 focus:outline-none focus:ring-1 focus:ring-primary-100 py-1 px-1.5 text-black" 
         />
        {touched[field.name] && errors[field.name] && (<p className='font-semibold text-red-500 text-sm'>{errors[field.name]}</p>) }
    </div>
  ) 
}

export default Input