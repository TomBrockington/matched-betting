import React from 'react'
import './style.css'

function FormInput(props) {
  console.log('props', props);
    return (
    <div className='form__input'>
        <label htmlFor=""></label>
        <input type="text" placeholder={props.placeholder} />
    </div>
  )
}

export default FormInput