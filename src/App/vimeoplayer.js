import React from 'react'
import ReactPlayer from 'react-player'
function vimeoplayer() {

  return (
    <section className="container section1 mb-5 pt-100 " id="VideoPlayer">

        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://vimeo.com/435638545'
            width='100%'
            height='100%'
            controls
          />
        </div>

    </section>
  )
}

export default vimeoplayer
