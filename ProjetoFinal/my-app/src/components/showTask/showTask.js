import React from 'react'
import './showTask.css'

class ShowTask extends React.Component {
   constructor(props){
       super (props);
       this.state ={
        title: this.props.title || [],
        text: this.props.text || []
    }
      
   }
       

    render(){
        return (
        <form className='showTaskForm'>
            <p className='paragraphStyle'> {this.props.setTitleafterStart} </p>
            <p> {this.props.setTextafterStart} </p>
        </form>
        )

    }
}
export default ShowTask 