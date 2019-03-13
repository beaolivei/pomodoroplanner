import React from 'react'
const Button = (props) => <button className="btn" onClick={props.action}>{props.children}</button>
export default Button