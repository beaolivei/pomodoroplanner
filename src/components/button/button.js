import React from 'react'
import './button.css'

function Button (props) {
    return (
        <button className='button' style={{backgroundColor: props.backgroundColor, marginLeft: props.marginLeft, display:props.display}} {...props}> {props.buttonText} </button>
    )
}
export default Button