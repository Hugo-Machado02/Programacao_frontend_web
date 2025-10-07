import React from 'react'
import './Btn.css'

const Btn = ({name}) => {
  return (
    <>
    <div>
        <button type="submit" className='btn'>{name}</button>
    </div>
      
    </>
  )
}

export default Btn
