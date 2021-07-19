import React from 'react';
import ReactPlayer from 'react-player'
// https://player.vimeo.com/video/435638545
class VideoPlayer extends React.Component {



  render(){
    return(
    <section className="container section1 mb-5 pt-100 hideme" id="VideoPlayer">
      <div className="row ">
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
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
