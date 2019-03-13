import React from 'react'
import './title.css'


function Title (props) {
    return (
        <h1 className = 'textContent' {... props}> {props.textContent} </h1>
    )
}
export default Title