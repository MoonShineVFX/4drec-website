import React from 'react';
import './index.scss';
import './mobileIndex.scss';
import '../Shared/function';
import Navbar from './Navbar'
import About from './About'
// import VirtualStudio from './VirtualStudio'
// import ThreeDRec from './3DRec'
// import FourDRec from './4DRec'
import MouseIcon from './MouseIcon'
import ScrollTopBtn from './ScrollTopBtn'
import Footer from './Footer'
import VideoPlayer from './VideoPlayer'
import Chapter1 from './Chapter1'
// import Chapter2 from './Chapter2'
import Chapter2 from './Chapter-trial'
import Chapter3 from './Chapter-training'
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <About />
      <MouseIcon/>
      <VideoPlayer/>
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <ScrollTopBtn />
      <Footer />
    </React.Fragment>
      
  );
}

export default App;
