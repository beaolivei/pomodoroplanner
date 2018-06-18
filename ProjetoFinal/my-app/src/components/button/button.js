import React from 'react'
import './button.css'

function Button (props) {
    return (
        <button className='button' style={{backgroundColor: props.backgroundColor, margin: props.margin}} {...props}> {props.buttonText} </button>
    )
}
export default Button