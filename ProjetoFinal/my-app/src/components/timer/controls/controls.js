import React from 'react';
import Button from '../../button/button'
import './controls.css'

const Controls = (props) => {
	return (
		<div className='controls'>
			<Button display='block' backgroundColor='rgb(110, 197, 76)' buttonText = 'Start Timer'onClick={props.handleOnClickStart}/>
			<Button display='block'backgroundColor='rgb(122, 118, 110)' buttonText = 'Stop' onClick={props.handleOnClickStop}/>
		</div>
	)
}

export default Controls;
