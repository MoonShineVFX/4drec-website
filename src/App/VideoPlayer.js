import React from 'react';
import ReactPlayer from 'react-player'
// https://player.vimeo.com/video/435638545
class VideoPlayer extends React.Component {

  var style1 = {
    position:'absolute', 
    top:'0', 
    left:'0', 
    width:"100%", 
    height:"100%"
  }

  render(){
    return(
    <section className="container section1 mb-5 pt-100 " id="VideoPlayer">
      <div className="row ">
        <div style="padding:56.25% 0 0 0;position:relative;">
          <iframe 
            src="https://player.vimeo.com/video/569244359?title=0&byline=0&portrait=0" 
            style={{style1}}
            frameborder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
        <script src="https://player.vimeo.com/api/player.js"></script>

        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://vimeo.com/435638545'
            width='100%'
            height='100%'
          />
        </div>
      </div>

    </section>
    )
  }
}


export default VideoPlayer
