import React from 'react';
export default function FourDRec(){
  return <section className="container section1 pt-100 mb-5" id="4DRec">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
       <h1>4D Rec</h1>
        <p>Create Live Volumetric Characters</p>
      </div>
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12 hideme">
      <img src="images/4d01.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 pl-4 content hideme delay1">
      <h3 className="mb-4">Making Realistic Virtual Human Acting with Photogrammetry</h3>
      <p className="mb-3 details">MoonShine is one of the most innovative animation companies in Taiwan. We have developed volumetric capture technology to capture motions markeless, and stream animations in real-time.</p>
      
    </div>
    <div className="col-md-12 mb-5"></div>
    <div className="col-lg-6 col-md-12 col-sm-12 order-md-1 order-lg-2 hideme">
      <img src="images/4d02.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 mt-5 pl-4 content order-md-2 order-lg-1 hideme delay1">
      <p className="mb-4 details">Using synchronized, high-end video cameras, we acquire terabytes of photorealistic human motion. The data is used for MV, VFX, family record, games and AR / VR.
      </p>
      <ul className="special-list mb-3">
        <li>Scalable system. Catering different situation with different amount of cameras.</li>
        <li>Industry-leading innovation in Taiwan.</li>
        <li>With the latest equipments, achieves high efficiency of the whole system.</li>
        <li>Compatible with render farm.</li>
      </ul>
    </div>
  </div>
</section>
  
}