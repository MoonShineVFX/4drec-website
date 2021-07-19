import React from 'react';
export default function ThreeDRec(){
  return <section className="container section1 pt-100 mb-5" id="3DRec">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
        <h1>3D Rec</h1>
        <p>Advanced Photogrammetry Scanning System</p>
      </div>
    
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12 hideme">
      <img src="images/3d01.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 pl-4 content hideme delay1">
      <h3 className="mb-4">Creating Animation in Real-time</h3>
      <p className="mb-3 details">While building character models is a time-consuming work, our 3D scanning system is the solution for modeling. Humans, animals or any subject can be scanned and rigged instantly.</p>
      
    </div>
    <div className="col-md-12 mb-5"></div>
    <div className="col-lg-6 col-md-12 col-sm-12 order-md-1 order-lg-2 hideme">
      <img src="images/3d02.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 mt-5 pl-4 content order-md-2 order-lg-1 hideme delay1">
      <p className="mb-3 details">With over 60 cameras, our photogrammetry rig captures subjects from all angles to bring players and props into virtual worlds for use in gaming, VR, AR and other interactive media.</p>
      <ul className="special-list mb-3">
        <li>Affordable and portable photogrammetry capture stage.</li>
        <li>61 cameras synchronized, capturing data efficiently.</li>
        <li>Support full body scanning.</li>
        <li>Auto rigging. Instantly creating character animation.</li>
        <li>Attach mo-cap motions in seconds.</li>
      </ul>
    </div>
  </div>
</section>
  
}