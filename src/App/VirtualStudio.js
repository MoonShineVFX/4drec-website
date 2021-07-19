import React from 'react';
export default function VirtualStudio(){
  return <section className="container section1 pt-100 mb-5" id="VirtualStudio">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
        <h1>Virtual Studio</h1>
        <p>Professional Virtual Sets With Blue Screen</p>
      </div>
      
    </div>

    <div className="col-lg-6 col-md-12 col-sm-12 hideme">
      <img src="images/vs01.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 pl-4 content hideme delay1">
      <h3 className="mb-4">Easy to Customize. Great Flexibility </h3>
      <p className="mb-3 details">MoonShine developed our virtual studio with PiStage and motion capture system. Allowing animators, lighters, camera operators and FX artist to see the final result instantly while editing. </p>
    </div>
    <div className="col-md-12 mb-5"></div>
    <div className="col-lg-6 col-md-12 col-sm-12 order-md-1 order-lg-2 hideme">
      <img src="images/vs02.jpg" alt="" className="img-fluid" />
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 mt-5 pl-4 content order-md-2 order-lg-1 hideme delay1">
      <p className="mb-3 details">Features flexible and high quality blue screen studio, providing the solution for onset or virtual production in realtime. </p>
      <ul className="special-list mb-3">
        <li>Equipped with sophisticated VR sets and advanced mo-cap system.</li>
        <li>Realtime sync with Maya and Unreal Engine, easily create complex 3D graphics.</li>
        <li>Transforming, rotating and manipulate any asset in anytime.</li>
        <li>Creating highly detailed, photorealistic scene in realtime.</li>
      </ul>
    </div>
  </div>
</section>
  
}