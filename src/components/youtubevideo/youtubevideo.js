// import React from 'react'

// class YoutubeVideo extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state ={
//             video: [],
//         }
//     }
//     componentDidMount() {
//         const bandName = localStorage.getItem('bandName')
//         fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=vidasdfasdfasdfaeo&q=${bandName}&key=AIzaSyBob9dh04tmsSJkjfgIBknpw15FOKh9IdU`)
//         .then(results => {
//             return results.json();
//         }).then (data =>{
//         let videos = data.results.map((video)=> {
//             return (
//                 <div key={video.results}>
//                     <a src={video.url}/>
//                 </div>
//             )
//         })
//         this.setState({
//             video: videos
//         })
//     }
//     render() {
//         return (
//             <p>{this.state.video} </p>
//         )
//     }
// }
    
// export default YoutubeVideo