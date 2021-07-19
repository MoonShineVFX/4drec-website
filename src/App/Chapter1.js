import React from 'react';
export default function VirtualStudio(){
  return <section className="container section1 pt-100 mb-5" id="Chapter1">
  <div className="row appCard">
    <div className="col-md-8 text-center offset-md-2 hideme">
      <div className="mainTitle">
        <h1>場地規格</h1>
        <p>Venue Specifications</p>
      </div>
      
    </div>
    <div className="col-lg-12 col-md-12 col-sm-12 hideme">
      <table className="table table-bordered table-dark">
        <tbody>
          <tr>
            <th className="bg-dark" scope="row">動態補捉範圍</th>
            <td className="bg-secondary">最大4m x 4m x 2m (高)</td>
          </tr>
          <tr>
            <th className="bg-dark" scope="row">場地布景</th>
            <td className="bg-secondary">數位綠幕背景</td>
          </tr>

        </tbody>
      </table>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 hideme">
      <img src="images/spec/05.jpg" alt="" className="img-fluid" />
      <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-1">鏡頭設置</div>
    </div>
    <div className="col-lg-6 col-md-12 col-sm-12 hideme delay1">
      <img src="images/spec/06.jpg" alt="" className="img-fluid" />
      <div className="col-lg-12 col-md-12 col-sm-12 text-center mt-1">燈光配置</div>
    </div>

  </div>
</section>
  
}