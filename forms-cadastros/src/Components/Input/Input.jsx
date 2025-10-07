import React from 'react'
import './Input.css'

const Input = ({ label, type, value, onChange, name }) => {
    return (
        <>
        <div className='containerInput'>
            <label htmlFor="" className='labelInput'>{label}</label>
            <input type={type} value={value} name={name} onChange={onChange} className='inputTxt' required/>
        </div>
        </>
    )
}

export default Input
