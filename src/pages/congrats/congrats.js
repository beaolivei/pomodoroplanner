import React from 'react'
import Title from '../../components/title/title'
import goodJob from '../congrats/goodJob.gif'
import './congrats.css'
import YoutubeVideo from '../../components/youtubevideo/youtubevideo';

class Congrats extends React.Component {
    render(){
        return(
            <section>
                <div className='congratulationGiphy'>
                    <img src={goodJob} className='giphy'/>
                    <Title textContent='You Are Awesome!'/>
                    <p>Now you can enjoy your free off guilty (well deserved!) 5 minutes break</p>
                    <p> May I recommend this cool video? </p>
                    {/* <YoutubeVideo/> */}
                </div>
            </section>
        )
    }
    
}
export default Congrats