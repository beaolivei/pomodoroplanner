import React from 'react'

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
        <form>
            <p> {this.props.setTitleafterStart} </p>
            <p> {this.props.setTextafterStart} </p>
        </form>
        )

    }
}
export default ShowTask 