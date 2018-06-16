import React from 'react'
import './button.css'

function Button (props) {
    return (
        <button className='button' style={{marginLeft: props.marginLeft}}> {props.buttonText} </button>
    )
}
export default Button