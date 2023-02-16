import React from 'react'

function Radio({
    field: { name, value }, //{name,value,onChange,onBlur}
    form: { touched, errors, setFieldValue, setFieldTouched }, //{values, sexXXXX, handleXXXX, dirty, isValid, status}
    meta,
    label,
    className,
    options,
    ...props
}) {


  return (
        <fieldset className="mb-3">
                <legend className="mb-2 block text-xs font-semibold">{label}</legend>
                <div className="flex justify-between">
                {options.map(x => (
                    
                        <div key={x.id}>
                            <input className="border ml-2 border-gray-300 focus:border-primary-100 focus:outline-none focus:ring-1 focus:ring-primary-100 py-1 px-1.5 text-primary-100" 
                                    type="radio" name={name} id={x.id} checked={value === x.id} onChange={()=>{
                                    setFieldValue(name, x.id)
                                    setFieldTouched(name, x.id)
                            }}
                                />
                            <label className="mb-2 ml-1 text-xs font-semibold" htmlFor={x.id}>{x.text}</label>
                        </div>
                    
                    ))}
                    </div>

                    {/* {touched[name] && errors[name] && (<p className='font-semibold text-red-500 text-sm'>{errors[name]}</p>) } */}

        </fieldset>   
  )
}

export default Radio